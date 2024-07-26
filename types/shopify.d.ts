/* eslint-disable @typescript-eslint/no-empty-interface */
export interface ShopifyOrderResponse {
    id: number;
    admin_graphql_api_id: string;
    app_id: number;
    browser_ip: string;
    buyer_accepts_marketing: boolean;
    cancel_reason: any;
    cancelled_at: any;
    cart_token: any;
    checkout_id: number;
    checkout_token: string;
    client_details: ClientDetails;
    closed_at: any;
    company: any;
    confirmation_number: string;
    confirmed: boolean;
    contact_email: any;
    created_at: string;
    currency: string;
    current_subtotal_price: string;
    current_subtotal_price_set: CurrentSubtotalPriceSet;
    current_total_additional_fees_set: any;
    current_total_discounts: string;
    current_total_discounts_set: CurrentTotalDiscountsSet;
    current_total_duties_set: any;
    current_total_price: string;
    current_total_price_set: CurrentTotalPriceSet;
    current_total_tax: string;
    current_total_tax_set: CurrentTotalTaxSet;
    customer_locale: string;
    device_id: any;
    discount_codes: any[];
    email: string;
    estimated_taxes: boolean;
    financial_status: string;
    fulfillment_status: string;
    landing_site: any;
    landing_site_ref: any;
    location_id: number;
    merchant_of_record_app_id: any;
    name: string;
    note: any;
    note_attributes: any[];
    number: number;
    order_number: number;
    order_status_url: string;
    original_total_additional_fees_set: any;
    original_total_duties_set: any;
    payment_gateway_names: string[];
    phone: any;
    po_number: any;
    presentment_currency: string;
    processed_at: string;
    reference: string;
    referring_site: any;
    source_identifier: string;
    source_name: string;
    source_url: any;
    subtotal_price: string;
    subtotal_price_set: SubtotalPriceSet;
    tags: string;
    tax_exempt: boolean;
    tax_lines: TaxLine[];
    taxes_included: boolean;
    test: boolean;
    token: string;
    total_discounts: string;
    total_discounts_set: TotalDiscountsSet;
    total_line_items_price: string;
    total_line_items_price_set: TotalLineItemsPriceSet;
    total_outstanding: string;
    total_price: string;
    total_price_set: TotalPriceSet;
    total_shipping_price_set: TotalShippingPriceSet;
    total_tax: string;
    total_tax_set: TotalTaxSet;
    total_tip_received: string;
    total_weight: number;
    updated_at: string;
    user_id: number;
    billing_address: any;
    customer: any;
    discount_applications: any[];
    fulfillments: Fulfillment[];
    line_items: LineItem2[];
    payment_terms: PaymentTerms;
    refunds: any[];
    shipping_address: any;
    shipping_lines: any[];
}

export interface ClientDetails {
    accept_language: any;
    browser_height: any;
    browser_ip: string;
    browser_width: any;
    session_hash: any;
    user_agent: string;
}

export interface CurrentSubtotalPriceSet {
    shop_money: ShopMoney;
    presentment_money: PresentmentMoney;
}

export interface ShopMoney {
    amount: string;
    currency_code: string;
}

export interface PresentmentMoney {
    amount: string;
    currency_code: string;
}

export interface CurrentTotalDiscountsSet {
    shop_money: ShopMoney2;
    presentment_money: PresentmentMoney2;
}

export interface ShopMoney2 {
    amount: string;
    currency_code: string;
}

export interface PresentmentMoney2 {
    amount: string;
    currency_code: string;
}

export interface CurrentTotalPriceSet {
    shop_money: ShopMoney3;
    presentment_money: PresentmentMoney3;
}

export interface ShopMoney3 {
    amount: string;
    currency_code: string;
}

export interface PresentmentMoney3 {
    amount: string;
    currency_code: string;
}

export interface CurrentTotalTaxSet {
    shop_money: ShopMoney4;
    presentment_money: PresentmentMoney4;
}

export interface ShopMoney4 {
    amount: string;
    currency_code: string;
}

export interface PresentmentMoney4 {
    amount: string;
    currency_code: string;
}

export interface SubtotalPriceSet {
    shop_money: ShopMoney5;
    presentment_money: PresentmentMoney5;
}

export interface ShopMoney5 {
    amount: string;
    currency_code: string;
}

export interface PresentmentMoney5 {
    amount: string;
    currency_code: string;
}

export interface TaxLine {
    price: string;
    rate: number;
    title: string;
    price_set: PriceSet;
    channel_liable: boolean;
}

export interface PriceSet {
    shop_money: ShopMoney6;
    presentment_money: PresentmentMoney6;
}

export interface ShopMoney6 {
    amount: string;
    currency_code: string;
}

export interface PresentmentMoney6 {
    amount: string;
    currency_code: string;
}

export interface TotalDiscountsSet {
    shop_money: ShopMoney7;
    presentment_money: PresentmentMoney7;
}

export interface ShopMoney7 {
    amount: string;
    currency_code: string;
}

export interface PresentmentMoney7 {
    amount: string;
    currency_code: string;
}

export interface TotalLineItemsPriceSet {
    shop_money: ShopMoney8;
    presentment_money: PresentmentMoney8;
}

export interface ShopMoney8 {
    amount: string;
    currency_code: string;
}

export interface PresentmentMoney8 {
    amount: string;
    currency_code: string;
}

export interface TotalPriceSet {
    shop_money: ShopMoney9;
    presentment_money: PresentmentMoney9;
}

export interface ShopMoney9 {
    amount: string;
    currency_code: string;
}

export interface PresentmentMoney9 {
    amount: string;
    currency_code: string;
}

export interface TotalShippingPriceSet {
    shop_money: ShopMoney10;
    presentment_money: PresentmentMoney10;
}

export interface ShopMoney10 {
    amount: string;
    currency_code: string;
}

export interface PresentmentMoney10 {
    amount: string;
    currency_code: string;
}

export interface TotalTaxSet {
    shop_money: ShopMoney11;
    presentment_money: PresentmentMoney11;
}

export interface ShopMoney11 {
    amount: string;
    currency_code: string;
}

export interface PresentmentMoney11 {
    amount: string;
    currency_code: string;
}

export interface Fulfillment {
    id: number;
    admin_graphql_api_id: string;
    created_at: string;
    location_id: number;
    name: string;
    order_id: number;
    origin_address: OriginAddress;
    receipt: Receipt;
    service: string;
    shipment_status: any;
    status: string;
    tracking_company: any;
    tracking_number: any;
    tracking_numbers: any[];
    tracking_url: any;
    tracking_urls: any[];
    updated_at: string;
    line_items: LineItem[];
}

export interface OriginAddress {}

export interface Receipt {}

export interface LineItem {
    id: number;
    admin_graphql_api_id: string;
    attributed_staffs: any[];
    fulfillable_quantity: number;
    fulfillment_service: string;
    fulfillment_status: string;
    gift_card: boolean;
    grams: number;
    name: string;
    price: string;
    price_set: PriceSet2;
    product_exists: boolean;
    product_id: number;
    properties: any[];
    quantity: number;
    requires_shipping: boolean;
    sku: string;
    taxable: boolean;
    title: string;
    total_discount: string;
    total_discount_set: TotalDiscountSet;
    variant_id: number;
    variant_inventory_management: string;
    variant_title: any;
    vendor: string;
    tax_lines: TaxLine2[];
    duties: any[];
    discount_allocations: any[];
}

export interface PriceSet2 {
    shop_money: ShopMoney12;
    presentment_money: PresentmentMoney12;
}

export interface ShopMoney12 {
    amount: string;
    currency_code: string;
}

export interface PresentmentMoney12 {
    amount: string;
    currency_code: string;
}

export interface TotalDiscountSet {
    shop_money: ShopMoney13;
    presentment_money: PresentmentMoney13;
}

export interface ShopMoney13 {
    amount: string;
    currency_code: string;
}

export interface PresentmentMoney13 {
    amount: string;
    currency_code: string;
}

export interface TaxLine2 {
    channel_liable: boolean;
    price: string;
    price_set: PriceSet3;
    rate: number;
    title: string;
}

export interface PriceSet3 {
    shop_money: ShopMoney14;
    presentment_money: PresentmentMoney14;
}

export interface ShopMoney14 {
    amount: string;
    currency_code: string;
}

export interface PresentmentMoney14 {
    amount: string;
    currency_code: string;
}

export interface LineItem2 {
    id: number;
    admin_graphql_api_id: string;
    attributed_staffs: any[];
    fulfillable_quantity: number;
    fulfillment_service: string;
    fulfillment_status: string;
    gift_card: boolean;
    grams: number;
    name: string;
    price: string;
    price_set: PriceSet4;
    product_exists: boolean;
    product_id: number;
    properties: any[];
    quantity: number;
    requires_shipping: boolean;
    sku: string;
    taxable: boolean;
    title: string;
    total_discount: string;
    total_discount_set: TotalDiscountSet2;
    variant_id: number;
    variant_inventory_management: string;
    variant_title: any;
    vendor: string;
    tax_lines: TaxLine3[];
    duties: any[];
    discount_allocations: any[];
}

export interface PriceSet4 {
    shop_money: ShopMoney15;
    presentment_money: PresentmentMoney15;
}

export interface ShopMoney15 {
    amount: string;
    currency_code: string;
}

export interface PresentmentMoney15 {
    amount: string;
    currency_code: string;
}

export interface TotalDiscountSet2 {
    shop_money: ShopMoney16;
    presentment_money: PresentmentMoney16;
}

export interface ShopMoney16 {
    amount: string;
    currency_code: string;
}

export interface PresentmentMoney16 {
    amount: string;
    currency_code: string;
}

export interface TaxLine3 {
    channel_liable: boolean;
    price: string;
    price_set: PriceSet5;
    rate: number;
    title: string;
}

export interface PriceSet5 {
    shop_money: ShopMoney17;
    presentment_money: PresentmentMoney17;
}

export interface ShopMoney17 {
    amount: string;
    currency_code: string;
}

export interface PresentmentMoney17 {
    amount: string;
    currency_code: string;
}

export interface PaymentTerms {
    id: number;
    created_at: string;
    due_in_days: any;
    payment_schedules: PaymentSchedule[];
    payment_terms_name: string;
    payment_terms_type: string;
    updated_at: string;
}

export interface PaymentSchedule {
    id: number;
    amount: string;
    currency: string;
    issued_at: any;
    due_at: any;
    completed_at: any;
    created_at: string;
    updated_at: string;
}
