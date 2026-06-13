import { Router } from "express"
import { categoryController } from "../../controllers/category.controller";
import { dependencies } from "../../../../infrastructure/containers/index.container";
import { authMiddleware } from "../../middlewares/auth.middleware";

export const categoryRouter =(deps : dependencies)=>{
    const router = Router();
    const categorycontroller = new categoryController(deps.category);
    
    router.use(authMiddleware);
    
    router.get("/", categorycontroller.getAllcategory)
    router.post("/create", categorycontroller.createOnecategory)
    return router;
}