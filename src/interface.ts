
export interface singleProduct {
    id: number;
    title: string;
    description?: string;
    price: string;
    discountPercentage?: number; // Optional property
    rating?: number;             
    stock?: number;              
    brand?: string;              
    thumbnail?: string;          
    images?: string[];
    quantity?: number;
    totalproducts?:number;
}
