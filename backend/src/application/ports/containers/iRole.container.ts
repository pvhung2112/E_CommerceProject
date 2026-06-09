import { getAllroleuc } from "../../usecases/roles/getAllrole.usecase";
import { updatePermissionsuc } from "../../usecases/roles/updatePermissions.usecase";

export interface iRoledependenceIject {
    getAllroleUc: getAllroleuc;
    updatePermissionsUc : updatePermissionsuc
}