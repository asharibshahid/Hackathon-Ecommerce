
export interface Product {
    id: any;
    name: string;
    slug:{
        current: string;
        _type: "slug";
    }
    description: string;
    price: number;
    image?: {
        asset: {
            url: string;
        }
    }
    _type: "product";
    _id: string;
    
}