
import { IproductRepository } from "../../../application/ports/repositories/iProduct.respository";
import { productMapper } from "../../mappers/product.mapper";
import { productEntity } from "../../../domain/entities/product.entity";
import { productModel } from "../models/product.model";

export class productRepository implements IproductRepository{
   async getAll(): Promise<productEntity[]> {
        const docs = await productModel.find({}).lean();
        const items = productMapper.todomain(docs);
        return items;
    }
    async save(): Promise<void> {
            
        console.log("đã lưu");
    }
}
