import { Outlet } from "react-router-dom";
import SiderbarCellers from "../../../shared/partials/siderbarCellers";


function CellersPage(){
    return(
        <>
        <div className="cellerLayouts">
            <SiderbarCellers/>
            <Outlet/>
        </div>
        </>
    )
}
export default CellersPage;