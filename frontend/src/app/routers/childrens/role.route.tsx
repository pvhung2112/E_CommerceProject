import PermissionPage from "../../../pages/admin/permissions/permissionPage";
import RoleCreatePage from "../../../pages/admin/roles/roleCreatePage";
import RolesPage from "../../../pages/admin/roles/rolesPage";

export function roleRouter() {

    return [
        {
            path: "role",
            element: <RolesPage />
        },
        {
            path: "role/create",
            element: <RoleCreatePage />
        },
        {
            path: "role/permission",
            element: <PermissionPage />
        }
    ]
}
export default roleRouter;