import { Router } from "express";
import { Response,Request } from "express";
const router : Router = Router();
router.get("/",(_req : Request,res : Response)=>{
    res.send("ok");
})
export const dashbroadRouter = router;