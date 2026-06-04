import RoleCreatePage from "../../../pages/admin/roles/roleCreatePage";
import RolesPage from "../../../pages/admin/roles/rolesPage";

export function roleRouter(){

    return [
        {
            path : "role",
            element : <RolesPage/>
        },
        {
            path : "role/create",
            element : <RoleCreatePage/>
        }
    ]
}
export default roleRouter;