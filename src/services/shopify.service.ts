import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { LineItem2, ShopifyOrderResponse } from '../../types/shopify';
import { config } from '../config/config';
import { axios } from '../middlewares/axios.middleware';
import { logger } from '../middlewares/logger.middleware';
import {
    GraphQLResponse,
    InventoryItem,
    InventoryLevelRestRequestDto,
    InventoryLevelRestResponseDto,
    ProductVariantsInventoryResponseGraphQLDto,
} from '../shared/dtos/product-variants.dto';

class ShopifyService {
    public async processNewOrderStock(order: ShopifyOrderResponse) {
        console.info(`New Order ${order.id}`)
        const orderItemsSharedSku = order.line_items.filter((orderItem) =>
            this.isProductSharedSku(orderItem),
        );

        if (!orderItemsSharedSku.length) {
            console.info(`Order ${order.id} don't have items with shared sku`)
            return;
        }

        for (const orderItem of orderItemsSharedSku) {
            const inventoryItem = await this.findInventoryItemSharedSku(
                orderItem.sku,
                orderItem.product_id,
            );
            this.updateProductInventoryAvailable(inventoryItem, orderItem.quantity, false);
        }
    }

    protected isProductSharedSku(orderItem: LineItem2): boolean {
        return orderItem.properties.some(
            (property) => property.name === '_shared_sku' && property.value === 'true',
        );
    }

    protected async findInventoryItemSharedSku(
        sku: string,
        productId: number,
    ): Promise<InventoryItem> {
        const url = `${config.SHOPIFY_URL_BASE}/graphql.json`;
        const locationId = config.SHOPIFY_LOCATION_ID;
        const axiosConfig: AxiosRequestConfig = {
            headers: {
                'X-Shopify-Access-Token': config.SHOPIFY_ACCESS_TOKEN,
                'Content-Type': `application/json`,
            },
        };
        const query = `
        {
          productVariants(query: "sku:${sku}", first: 2) {
            nodes {
              product {
                legacyResourceId
              }
              inventoryItem {
                sku
                legacyResourceId
                inventoryLevel(locationId: "gid://shopify/Location/${locationId}") {
                  quantities(names: ["available", "on_hand", "incoming"]) {
                    name
                    quantity
                  }
                }
              }
            }
          }
        }`;
        const data = { query: query };
        let response: AxiosResponse<GraphQLResponse<ProductVariantsInventoryResponseGraphQLDto>>;
        try {
            response = await axios.post(url, data, axiosConfig);
            if (response.data.data.errors) {
                throw new Error(JSON.stringify(response.data.data));
            }
        } catch (e) {
            logger.error(
                `Failed request finding inventory of product variants with sku ${sku} error: ${e}`,
            );
            throw e;
        }
        const inventoryItemToUpdate: InventoryItem | undefined =
            response.data.data.productVariants.nodes.find(
                (product) => product.product.legacyResourceId !== productId.toString(),
            )?.inventoryItem;

        if (!inventoryItemToUpdate) {
            throw new Error(`Inventory Item for ${productId} not found in product variants`);
        }

        return inventoryItemToUpdate;
    }

    protected async updateProductInventoryAvailable(
        inventoryItem: InventoryItem,
        stockDifference: number,
        incrementFlag: boolean,
    ): Promise<InventoryLevelRestResponseDto> {
        const url = `${config.SHOPIFY_URL_BASE}/inventory_levels/adjust.json`;
        const locationId = config.SHOPIFY_LOCATION_ID;
        const axiosConfig: AxiosRequestConfig = {
            headers: {
                'X-Shopify-Access-Token': config.SHOPIFY_ACCESS_TOKEN,
                'Content-Type': `application/json`,
            },
        };
        const data: InventoryLevelRestRequestDto = {
            location_id: Number.parseInt(locationId),
            inventory_item_id: Number.parseInt(inventoryItem.legacyResourceId),
            available_adjustment: incrementFlag ? +stockDifference : -stockDifference,
        };
        let response: AxiosResponse<InventoryLevelRestResponseDto>;
        try {
            response = await axios.post(url, data, axiosConfig);
            if (response.data.errors) {
                throw new Error(JSON.stringify(response.data.errors));
            }
        } catch (e) {
            logger.error(
                `Failed request updating inventory available with product id ${inventoryItem.legacyResourceId} - sku ${inventoryItem.sku} error: ${e}`,
            );
            throw e;
        }
        return response.data;
    }
}

export default new ShopifyService();
