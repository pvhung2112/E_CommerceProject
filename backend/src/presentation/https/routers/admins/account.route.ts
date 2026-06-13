import { Router } from "express"
import { authMiddleware } from "../../middlewares/auth.middleware";
import { dependencies } from "../../../../infrastructure/containers/index.container";
import { accountController } from "../../controllers/account.controller";

export const accountRouter =(deps : dependencies)=>{
const router = Router();
const accountControl = new accountController(deps.account);
router.use(authMiddleware);

router.get("/",accountControl.getAll)
return router;
}