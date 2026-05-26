
import { productEntity } from "../../domain/entities/product.entity"
import { priceObj } from "../../domain/object-values/Price.obj"
import { productModel } from "../database/models/product.model";
import { productWithstats } from "../../application/ports/type/product.type";
export class productMapper {
    static todomain(docs: any): productWithstats[] { //db->entity
        const items: productWithstats[] = docs.map((doc: any) => {
            const Price: priceObj = new priceObj(doc.amount, doc.currency);
            const item = new productEntity(doc._id, doc.title, Price, doc.images, doc.description, doc.stock, doc.sellerId, doc.status, doc.discountPercentage);
            return {
                data: item,
                rating: doc.rating,
                ratingCount: doc.ratingCount,
                sold: doc.sold
            }
        })
        return items;

    }
    static toPersistence(product: productWithstats) { //entity->db
        const item = new productModel(
            {
                title: product.data.getTitle(),
                images: product.data.getImages(),
                amount: product.data.getPrice().getAmount(),
                currency: product.data.getPrice().getCurrency(),
                description: product.data.getDescription(),
                stock: product.data.getStock(),
                sellerId: product.data.getSellerId(),
                status: product.data.getStatus(),
                discountPercentage: product.data.getDiscountPercentage(),
                rating: product.rating,
                ratingCount: product.ratingCount,
                sold: product.sold
            })
        return item;
    }

}