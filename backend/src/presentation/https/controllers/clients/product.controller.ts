import { productdependenceIject } from "../../../../application/ports/containers/iProduct.container";
import { Request,Response } from "express";
export class productController{
    constructor(private deps : productdependenceIject){}
    getallProduct = async(_req : Request, res : Response) : Promise<void> =>{
       const products =  await this.deps.getallproductUc.execute();
        res.status(200).json({
            status : true,
            products : products
        })
    }
    
}