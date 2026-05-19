import { Express } from "express"
import { dashbroadRouter } from "./dashboard.route"
import { dependencies } from "../../../../infrastructure/containers/index.container";
export const routerClient = (app : Express,deps : dependencies) =>{
const api = "/api/v1";
app.use(`${api}/products`,dashbroadRouter(deps));
}
