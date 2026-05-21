import { getallProductUc } from "../../usecases/products/getallProduct.usecase";
import { getDetailproductUc } from "../../usecases/products/getDetailproduct.usecase";
import { createProductUc } from "../../usecases/products/createProduct.usecase";

export interface productdependenceIject {
    getallproductUc: getallProductUc,
    getdetailproductUc :  getDetailproductUc,
    createproductUc : createProductUc
}
