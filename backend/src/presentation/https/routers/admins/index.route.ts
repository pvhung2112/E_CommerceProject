import { Express } from "express"
import { productRouter } from "./product.route";
import { dependencies } from "../../../../infrastructure/containers/index.container";
export  const routerAdmin =(app : Express, deps : dependencies)=>{
    const API = "/admin/api/v1";
    app.use(`${API}/products`,productRouter(deps));
}