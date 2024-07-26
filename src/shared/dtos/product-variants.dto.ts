export interface InventoryItem {
    sku: string;
    legacyResourceId: string;
    inventoryLevel: {
        quantities: Array<{
            name: string;
            quantity: number;
        }>;
    };
}

export interface InventoryLevelRestRequestDto {
    location_id: number;
    inventory_item_id: number;
    available_adjustment: number;
}

export interface InventoryLevelRestResponseDto {
    inventory_level: {
        inventory_item_id: number;
        location_id: number;
        available: number;
        updated_at: string;
        admin_graphql_api_id: string;
    };
    errors?: string;
}

export interface ProductVariantsInventoryResponseGraphQLDto {
    productVariants: {
        nodes: Array<{
            product: {
                legacyResourceId: string;
            };
            inventoryItem: {
                sku: string;
                legacyResourceId: string;
                inventoryLevel: {
                    quantities: Array<{
                        name: string;
                        quantity: number;
                    }>;
                };
            };
        }>;
    };
    errors?: ErrorDtoGraphQL;
}

export type ErrorDtoGraphQL = Array<{
    message: string;
    locations: Array<{
        line: number;
        column: number;
    }>;
    path: Array<string>;
}>;

export type GraphQLResponse<T> = { data: T };
