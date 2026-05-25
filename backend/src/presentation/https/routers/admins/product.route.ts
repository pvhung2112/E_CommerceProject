import { Router } from "express"
import { productController } from "../../controllers/product.controller";
import { dependencies } from "../../../../infrastructure/containers/index.container";
export const productRouter =(deps : dependencies)=>{
    const router = Router();
    const productControll : productController = new productController(deps.product)
    router.post("/create",productControll.createProduct)
    router.patch("/edit/:id",productControll.editProduct)
    return router;
}