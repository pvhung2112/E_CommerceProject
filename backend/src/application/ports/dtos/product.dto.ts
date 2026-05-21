export interface productDtooutput{
    id : string;
    name : string;
    price : {
        amount : number;
        currency : string;
    }

    create_at : string;
}
export interface productDtoinput{
    name : string;
    price : {
        amount : number;
        currency : string;
    },
    description : string,
}