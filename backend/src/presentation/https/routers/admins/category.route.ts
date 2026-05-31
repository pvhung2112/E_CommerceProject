import { Router } from "express"
import { categoryController } from "../../controllers/category.controller";
import { dependencies } from "../../../../infrastructure/containers/index.container";

export const categoryRouter =(deps : dependencies)=>{
    const router = Router();
    const categorycontroller = new categoryController(deps.category);
    router.get("/",categorycontroller.getAllcategory)
    router.post("/create",categorycontroller.createOnecategory)
    return router;
}