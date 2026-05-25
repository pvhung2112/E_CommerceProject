import { productEntity } from "../../../domain/entities/product.entity";

export interface IproductRepository {
    getAll(): Promise<productEntity[]>;
    getDetail(id: string): Promise<productEntity>;
    save(product : productEntity): Promise<productEntity>;
}