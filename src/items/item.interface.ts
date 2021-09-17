export interface BaseItem {
    name: string;
    address: string;
    city: string;
    latitude: number;
    longitude: number;
    prices: Array<{ price: number, currency: string, product_id: string }>;
    products: Array<{ product_id: string, points: Array<{ id: string, status: string }> }>
    price: number;
    description: string;
    image: string;
}

export interface Item extends BaseItem {
    id: string;
}