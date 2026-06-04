import { IRoleRepository } from "../../application/ports/repositories/iRole.repository";
import { roleRepository } from "../database/repositories/role.repository"
import { getAllroleuc } from "../../application/usecases/roles/getAllrole.usecase";
import { iRoledependenceIject } from "../../application/ports/containers/iRole.container";
export const roleContainer = (): iRoledependenceIject => {
    const roleRepo: IRoleRepository = new roleRepository();
    return ({
        getAllroleUc: new getAllroleuc(roleRepo)
    })
}