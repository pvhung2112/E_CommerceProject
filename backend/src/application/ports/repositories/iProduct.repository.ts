import { productEntity } from "../../../domain/entities/product.entity";
import { productDtoinput } from "../dtos/product.dto";

export interface IproductRepository{
    getAll() : Promise<productEntity[]>;
    getDetail(id : string) : Promise<productEntity>;
    save(itemInput : productDtoinput) : Promise<productEntity>;
}