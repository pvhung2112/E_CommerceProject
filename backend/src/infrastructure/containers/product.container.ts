import { IproductRepository } from "../../application/ports/repositories/iProduct.repository";
import { getallProductUc } from "../../application/usecases/getallProduct.usecase";
import { productdependenceIject } from "../../application/ports/containers/iProduct.container";
import { productRepository } from "../database/repositories/product.repository";
import { getDetailproductuc } from "../../application/usecases/getDetailproduct.usecase";

export const productContainer = (): productdependenceIject => {
    const productRepo: IproductRepository = new productRepository();
    return {
        getallproductUc: new getallProductUc(productRepo),
        getdetailproductUc : new getDetailproductuc(productRepo)
    }
}
