import { ICategoryRepository } from "../../../application/ports/repositories/iCategory.repository";
import { categoryEntity } from "../../../domain/entities/category.entity";
import { categoryMapper } from "../../mappers/category.mapper";
import { categoryModel } from "../models/category.model";
export class categoryRepository implements ICategoryRepository{
 async getAll(): Promise<categoryEntity[]>{
   const find = {
      "deleted.status" : false
   };
    const docs = await categoryModel.find(find).lean();
    const items = categoryMapper.todomain(docs);
    return items;
 }
   
 
 async save(item : categoryEntity) : Promise<categoryEntity>{
   const doc= categoryMapper.toPersistence(item);
   await doc.save();
  const [category]= categoryMapper.todomain([doc]);
  return category;
 }
}