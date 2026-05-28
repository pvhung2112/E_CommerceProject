import { productEntity } from "../../../domain/entities/product.entity";

import { productWithstats } from "../type/product.type";
export interface IproductRepository {
    getAll(): Promise<productWithstats[]>;
    getDetail(id: string): Promise<productWithstats>;
    save(product : productEntity): Promise<productEntity>;
    editOne(product : productEntity) : Promise<productEntity>;
    deleteOne(id : string) : Promise<void>;

}   