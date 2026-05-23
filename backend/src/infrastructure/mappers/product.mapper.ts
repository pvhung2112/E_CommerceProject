import { productDtoinput } from "../../application/ports/dtos/product.dto";
import { productEntity } from "../../domain/entities/product.entity"
import { priceObj } from "../../domain/object-values/Price.obj"
import { productModel } from "../database/models/product.model";

export class productMapper{
    static todomain(docs : any) : productEntity[]{ //db->entity
        const items = docs.map((doc : any)=>{
            const Price : priceObj = new priceObj(doc.amount,doc.currency);
            return  new productEntity(doc._id,doc.name,Price,doc.createAt,doc.images,doc.description);
        })
        return items;
    }
    static toPersistence(dto : productDtoinput) { //entity->db
        const item = new productModel(
            {
                name: dto.name,
                amount: dto.price.amount,
                currency: dto.price.currency,
                createAt : new Date(),
                description : dto.description
            }
        )
        return item;
    }
     
}