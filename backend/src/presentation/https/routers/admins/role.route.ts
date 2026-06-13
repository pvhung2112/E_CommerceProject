import { Router } from "express"
import { dependencies } from "../../../../infrastructure/containers/index.container";
import { roleController } from "../../controllers/role.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";
export const roleRouter = (deps: dependencies) => {
    const router = Router();
    const rolecontroller = new roleController(deps.role)
    
   
    router.use(authMiddleware);
    
    router.get("/", rolecontroller.getAll)
    router.patch("/permissions/update", rolecontroller.updatePermissions)
    return router;

}