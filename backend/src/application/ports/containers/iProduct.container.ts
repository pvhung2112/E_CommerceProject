import { getallProductUc } from "../../usecases/products/getallProduct.usecase";
import { getDetailproductUc } from "../../usecases/products/getDetailproduct.usecase";
import { createProductUc } from "../../usecases/products/createProduct.usecase";
import { editProductuc } from "../../usecases/products/editProduct.usecase";
import { deleteOneproductUc } from "../../usecases/products/deleteProduct.usecase";

export interface productdependenceIject {
    getallproductUc: getallProductUc,
    getdetailproductUc: getDetailproductUc,
    createproductUc: createProductUc
    updateOneproductuc : editProductuc,
    deleteOneproductuc : deleteOneproductUc
}
