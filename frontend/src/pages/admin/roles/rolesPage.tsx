import { NavLink } from "react-router-dom";
import RoleTable from "../../../features/roles/components/roleTable";
function RolesPage(){
    return(
        <>
        <NavLink to="/admin/role/create">thêm</NavLink>
        <RoleTable/>
        </>
    )
}
export default RolesPage;