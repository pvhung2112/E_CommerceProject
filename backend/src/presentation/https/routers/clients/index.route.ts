import { Express } from "express"
import { homeRouter } from "./home.route"
import { dependencies } from "../../../../infrastructure/containers/index.container";
export const routerClient = (app : Express,deps : dependencies) =>{
const api = "/api/v1";
app.use(`${api}/products`,homeRouter(deps));
app.use(`${api}/cellers/products`,homeRouter(deps))
}
