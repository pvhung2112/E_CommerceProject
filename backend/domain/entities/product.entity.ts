import { priceObj } from "../object-values/Price.obj";
export class productEntity{
    private readonly id : string;
    private name : string;
    private price : priceObj;
    private create_at : string;
    constructor(id : string,name :string , price :priceObj, create_at :string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.create_at = create_at;
    }
    getId() : string{
        return this.id;
    }
    getName() : string{
        return this.name;
    }
    getPrice() : priceObj{
        return this.price;
    }
    getCreateAt() : string{
        return this.create_at;
    }   
    setName(name : string) : void{
        this.name = name;
    }       
    setPrice(price : priceObj) : void{
        this.price = price;
    }
    setCreateAt(create_at : string) : void{
        this.create_at = create_at;
    }
}