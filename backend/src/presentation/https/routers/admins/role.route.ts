import { Router } from "express"
import { dependencies } from "../../../../infrastructure/containers/index.container";
import { roleController } from "../../controllers/role.controller";

export const roleRouter = (deps: dependencies) => {
    const router = Router();
    const rolecontroller = new roleController(deps.role)
    router.get("/", rolecontroller.getAll)
    return router;

}