import { Router } from "express";
import { productController } from "../../controllers/clients/product.controller";
import { dependencies } from "../../../../infrastructure/containers/index.container";


export const dashbroadRouter = (deps : dependencies)=>{
const router : Router = Router();
const productControll : productController = new productController(deps.product)
router.get("/",productControll.getallProduct);
return router;
} 
