import express from "express";
import { Express } from "express";
import cors from "cors";
import { routerClient } from "./presentation/https/routers/clients/index.route";
import {connect} from "./infrastructure/configs/connect";
import { Containers } from "./infrastructure/containers/index.container";
const app : Express = express();
const port: number = Number(process.env.PORT) || 5000;
const deps = Containers();

// CORS config
const corsOptions = {
  origin: process.env.URL_FRONTEND || "http://localhost:3000",
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

connect();
routerClient(app,deps);


app.listen(port, () => {
  console.log(`kết nối thành công đến http://localhost:${port}/`)
})