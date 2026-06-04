import { Router } from "express"
import { dependencies } from "../../../../infrastructure/containers/index.container";
import { permissionController } from "../../controllers/permisstion.controller";

export const permissionRouter =(deps : dependencies)=>{
const router = Router();
const permissionControl = new permissionController(deps.permission);
router.get("/",permissionControl.getAll)
return router;
} 