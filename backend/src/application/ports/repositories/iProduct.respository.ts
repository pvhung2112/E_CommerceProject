import { productEntity } from "../../../domain/entities/product.entity";

export interface IproductRepository{
    getAll() : Promise<productEntity[]>;
    save() : Promise<void>;
}