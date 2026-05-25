
import { productEntity } from "../../domain/entities/product.entity"
import { priceObj } from "../../domain/object-values/Price.obj"
import { productModel } from "../database/models/product.model";

export class productMapper {
    static todomain(docs: any): productEntity[] { //db->entity
        const items = docs.map((doc: any) => {
            const Price: priceObj = new priceObj(doc.amount, doc.currency);
            return new productEntity(doc._id, doc.name, Price, doc.createAt, doc.images, doc.description);
        })
        return items;
    }
    static toPersistence(product : productEntity) { //entity->db
      const item = new productModel(
        {
            name : product.getName(),
            images : product.getImages(),
            amount : product.getPrice().getAmount(),
            currency : product.getPrice().getCurrency(),
            description : product.getDescription(),
            createAt : product.getCreateAt()
    })
    return item;
}

}