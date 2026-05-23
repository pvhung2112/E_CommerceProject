
import { IproductRepository } from "../../../application/ports/repositories/iProduct.repository";
import { productMapper } from "../../mappers/product.mapper";
import { productEntity } from "../../../domain/entities/product.entity";
import { productModel } from "../models/product.model";
import { productDtoinput } from "../../../application/ports/dtos/product.dto";


export class productRepository implements IproductRepository {
    async getAll(): Promise<productEntity[]> {
        const docs = await productModel.find({}).lean();
        const items = productMapper.todomain(docs);
        return items;
    }
    async getDetail(id: string): Promise<productEntity> {
        const doc = await productModel.findOne({ _id: id }).lean();
        const [item] = productMapper.todomain([doc]);
        return item;
    }
    async save(itemInput : productDtoinput) : Promise<productEntity>{
      const persistence = productMapper.toPersistence(itemInput);
      await persistence.save();
     const [product] = productMapper.todomain([persistence]);
        return product;
    }
}
