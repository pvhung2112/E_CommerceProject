import express from "express";
import { Express } from "express";
import { routerClient } from "./presentation/routers/clients/index.route";
const app : Express = express();
const port: number = Number(process.env.PORT) || 3000;
routerClient(app);

app.listen(port, () => {
  console.log(`kết nối thành công đến http://localhost:${port}/`)
})