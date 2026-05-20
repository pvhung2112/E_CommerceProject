import { getallProductUc } from "../../usecases/getallProduct.usecase";
import { getDetailproductuc } from "../../usecases/getDetailproduct.usecase";

export interface productdependenceIject {
    getallproductUc: getallProductUc,
    getdetailproductUc :  getDetailproductuc
}
