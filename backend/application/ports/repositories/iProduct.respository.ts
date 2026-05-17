import { productEntity } from "../../../domain/entities/product.entity";

export interface IproductRepository{
    getAll() : productEntity[];
    save() : Promise<void>;
}