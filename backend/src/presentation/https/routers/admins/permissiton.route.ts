import { Router } from "express"
import { dependencies } from "../../../../infrastructure/containers/index.container";
import { permissionController } from "../../controllers/permisstion.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

export const permissionRouter =(deps : dependencies)=>{
const router = Router();
const permissionControl = new permissionController(deps.permission);


router.use(authMiddleware);

router.get("/", permissionControl.getAll)
return router;
} 