import { categoryEntity } from "../../../domain/entities/category.entity";
export interface ICategoryRepository {
   getAll(): Promise<categoryEntity[]>;
   
}