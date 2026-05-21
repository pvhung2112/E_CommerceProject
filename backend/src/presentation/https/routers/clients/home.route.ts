import { Router } from "express";
import { productController } from "../../controllers/product.controller";
import { dependencies } from "../../../../infrastructure/containers/index.container";


export const homeRouter = (deps : dependencies)=>{
const router : Router = Router();
const productControll : productController = new productController(deps.product)
router.get("/",productControll.getallProduct);
router.get("/:id",productControll.getDetailproduct);
return router;
} 

