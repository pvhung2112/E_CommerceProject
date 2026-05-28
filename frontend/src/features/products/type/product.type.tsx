export type productType = {
    id: string;
    title: string;
    price: {
        amount: number;
        currency: string;
    };
    images: string[];
    stock?: number;
    sellerId: string;
    status: string;
    discountPercentage: number;
    description?: string;
    rating?: number;
    ratingCount?: number;
    sold?: number;
};
// type props = {
//   data: productType[] | null
// }