import express from "express";
import { Express } from "express";
import { routerClient } from "./presentation/https/routers/clients/index.route";
import {connect} from "./infrastructure/configs/connect";
import { Containers } from "./infrastructure/containers/index.container";
const app : Express = express();
const port: number = Number(process.env.PORT) || 3000;
const deps = Containers();
connect();
routerClient(app,deps);


app.listen(port, () => {
  console.log(`kết nối thành công đến http://localhost:${port}/`)
})