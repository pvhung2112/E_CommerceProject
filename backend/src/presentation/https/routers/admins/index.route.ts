import { Express } from "express"

import { dependencies } from "../../../../infrastructure/containers/index.container";
import { categoryRouter } from "./category.route";
import { roleRouter } from "./role.route";
import { permissionRouter } from "./permissiton.route";
import { accountRouter } from "./account.route";
import { authRouter } from "./auth.route";
export const routerAdmin = (app: Express, deps: dependencies) => {
    const API = "/admin/api/v1";
    app.use(`${API}/category`, categoryRouter(deps))
    app.use(`${API}/roles`, roleRouter(deps))
    app.use(`${API}/permissions`, permissionRouter(deps))
    app.use(`${API}/accounts`,accountRouter(deps))
    app.use(`${API}/auth`,authRouter(deps))
}