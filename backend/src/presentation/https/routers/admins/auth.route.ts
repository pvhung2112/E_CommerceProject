import { Router } from "express"
import { dependencies } from "../../../../infrastructure/containers/index.container";
import { accountController } from "../../controllers/account.controller";

export const authRouter = (deps : dependencies) => {
    const router = Router();
    const authControl = new accountController(deps.auth);
    // router.post('/register', authControl.registerAccount);
    router.post("/login", authControl.loginAccount);
    router.post("/refresh-token", authControl.refreshToken);
    return router;
}