import { priceObj } from "../object-values/Price.obj";
export class productEntity{
    private readonly id : string;
    private name : string;
    private price : priceObj;
    private images : string[];
    private description : string;
    private create_at : string;
    constructor(id : string,name :string , price :priceObj, create_at :string, images : string[], description : string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.images = images;
        this.description = description;
        this.create_at = create_at;
    }
    getImages() : string[]{
        return this.images;
    }
    getDescription() : string{
        return this.description;
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
    setDescription(description : string) : void{   
        this.description = description;
    }
    setImages(images : string[]) : void{
        this.images = images;
    }
}