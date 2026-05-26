export interface productDtooutput{
    id : string;
    title : string;
    price : {
        amount : number;
        currency : string;
    };
    images : string[];
    stock : number;
    sellerId : string;
    status : string;
    discountPercentage : number;
    description : string;
    rating ?: number;
    ratingCount ?: number;
    sold ?: number;
}


export interface productDtoinput{
    title : string;
    price : {
        amount : number;
        currency : string;
    },
    images : string[],
    stock : number,
    status : string,
    discountPercentage : number,
    description : string,
}