import { useRoutes } from "react-router-dom";
import AdminRouter from "./admin.route";
import ClientsRouter from "./clients.route";


function AllRouters(){
const routerAdmin = AdminRouter();
const routerClients = ClientsRouter();
const router = useRoutes([
    routerAdmin,routerClients
])
return router;
}
export default AllRouters;