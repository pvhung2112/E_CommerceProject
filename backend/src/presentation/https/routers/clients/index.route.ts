import { Express } from "express"
import { dashbroadRouter } from "./dashbroad.route"
import { dependencies } from "../../../../infrastructure/containers/index.container";
export const routerClient = (app : Express,deps : dependencies) =>{
app.use("/",dashbroadRouter(deps));
}
