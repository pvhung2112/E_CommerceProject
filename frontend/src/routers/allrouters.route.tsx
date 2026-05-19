import { useRoutes } from "react-router-dom";
import { router } from "./router.route";

function AllRouters(){
const element = useRoutes(router);
return (element)
}
export default AllRouters;