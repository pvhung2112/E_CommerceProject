import { permissiondependenceIject } from "../../application/ports/containers/iPermission.container";
import { IPermissionRepository } from "../../application/ports/repositories/iPermission.repository"
import { permissionRepository } from "../database/repositories/permission.repository"
import { getAllpermissionuc } from "../../application/usecases/permissions/getAllpermission.usecase";
export const permissionContainer =() : permissiondependenceIject=>{
    const permissionRepo : IPermissionRepository = new permissionRepository();
    return {
        getAllpermissionUc : new getAllpermissionuc(permissionRepo)
    }
}