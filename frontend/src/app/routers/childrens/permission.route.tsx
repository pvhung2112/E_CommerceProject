import PermissionCreatePage from "../../../pages/admin/permissionsPage/permissionCreatePage";
import PermissionPage from "../../../pages/admin/permissionsPage/permissionPage";

export function permissionRouter(){

    return [
        {
            path : "permission",
            element : <PermissionPage/>
        },
        {
            path : "permission/create",
            element : <PermissionCreatePage/>
        }
    ]
}
export default permissionRouter;