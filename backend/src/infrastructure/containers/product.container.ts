import { IproductRepository } from "../../application/ports/repositories/iProduct.repository";
import { getallProductUc } from "../../application/usecases/products/getallProduct.usecase";
import { productdependenceIject } from "../../application/ports/containers/iProduct.container";
import { productRepository } from "../database/repositories/product.repository";
import { getDetailproductUc } from "../../application/usecases/products/getDetailproduct.usecase";
import { createProductUc } from "../../application/usecases/products/createProduct.usecase";
import { editProductuc } from "../../application/usecases/products/editProduct.usecase";

export const productContainer = (): productdependenceIject => {
    const productRepo: IproductRepository = new productRepository();
    return {
        getallproductUc: new getallProductUc(productRepo),
        getdetailproductUc: new getDetailproductUc(productRepo),
        createproductUc: new createProductUc(productRepo),
        updateOneproductuc : new editProductuc(productRepo)
    }
}
