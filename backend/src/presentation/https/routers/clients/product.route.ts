import { Router } from "express"
import { productController } from "../../controllers/product.controller";
import { dependencies } from "../../../../infrastructure/containers/index.container";
import { authMiddleware } from "../../middlewares/auth.middleware";
export const productRouter =(deps : dependencies)=>{
    const router = Router();
    const productControll : productController = new productController(deps.product)
    router.use(authMiddleware);
    router.post("/create",productControll.createProduct)
    router.patch("/edit/:id",productControll.editProduct)
    router.patch("/delete/:id",productControll.deleteProduct)
    return router;
}