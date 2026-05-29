
import { IproductRepository } from "../../../application/ports/repositories/iProduct.repository";
import { productMapper } from "../../mappers/product.mapper";
import { productEntity } from "../../../domain/entities/product.entity";
import { productModel } from "../models/product.model";
import { productWithstats } from "../../../application/ports/type/product.type";

export class productRepository implements IproductRepository {
    async getAll(): Promise<productWithstats[]> {
        const find = {
            "deleted.status": false
        }
        const docs = await productModel.find(find).lean();
        const items = productMapper.todomain(docs);
        return items;
    }

    async getDetail(id: string): Promise<productWithstats> {
        const find = {
            _id: id,
            "deleted.status":false
        }
        const doc = await productModel.findOne(find).lean();
        const [item] = productMapper.todomain([doc]);
        return item;
    }
    async save(product: productEntity): Promise<productEntity> {
        const productStats : productWithstats = {
            data: product,
            rating: 0,
            ratingCount: 0,
            sold: 0
        }
        const item = productMapper.toPersistence(productStats);
        await item.save();
        const [productSaved] = productMapper.todomain([item]);
        return productSaved.data;
    }
    async editOne(product: productEntity): Promise<productEntity> {
        
        const editDoc = await productModel.updateOne({ _id: product.getId() }, {
            $set: {
                title: product.getTitle(),
                images: product.getImages(),
                amount: product.getPrice().getAmount(),
                currency: product.getPrice().getCurrency(),
                description: product.getDescription(),
                stock: product.getStock(),
                status: product.getStatus(),
                discountPercentage: product.getDiscountPercentage()
            }
        });
        console.log(editDoc);
        return product;
    }
    async deleteOne(id : string) : Promise<void>{
        await productModel.updateOne({_id : id}, { deleted: {
         status: true,
         deletedAt: new Date()
      } });
    }
}
