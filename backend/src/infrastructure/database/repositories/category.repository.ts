import { ICategoryRepository } from "../../../application/ports/repositories/iCategory.repository";
import { categoryEntity } from "../../../domain/entities/category.entity";
import { categoryMapper } from "../../mappers/category.mapper";
import { categoryModel } from "../models/category.model";
export class categoryRepository implements ICategoryRepository{
 async getAll(): Promise<categoryEntity[]>{
    const docs = await categoryModel.find({});
    const items = categoryMapper.todomain(docs);
    return items;
 }
   
}