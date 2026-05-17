import { Express } from "express"
import { dashbroadRouter } from "./dashbroad.route"
export const routerClient = (app : Express) =>{
app.use("/",dashbroadRouter);
}