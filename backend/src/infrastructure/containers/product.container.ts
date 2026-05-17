import { IproductRepository } from "../../application/ports/repositories/iProduct.respository";
import { getallProductUc } from "../../application/usecases/getallProduct.usecase";
import { productRepository } from "../database/repositories/product.repository";

export interface productdependenceIject{
   getallproductUc : getallProductUc
}
export const productContainer =() : productdependenceIject =>{
const productRepo : IproductRepository = new productRepository();
    return {
        getallproductUc : new getallProductUc(productRepo)
    }
}
