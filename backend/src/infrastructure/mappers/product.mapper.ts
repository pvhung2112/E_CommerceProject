import { productEntity } from "../../domain/entities/product.entity"
import { priceObj } from "../../domain/object-values/Price.obj"

export class productMapper{
    static todomain(docs : any) : productEntity[]{
        const items = docs.map((doc : any)=>{
            const Price : priceObj = new priceObj(doc.amount,doc.currency);
            return  new productEntity(doc._id,doc.name,Price,doc.createAt,doc.images,doc.description);
        })
        return items;
    }
}