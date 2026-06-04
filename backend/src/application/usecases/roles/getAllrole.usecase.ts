import { roleDtooutput } from "../../ports/dtos/role.dto";
import { IRoleRepository } from "../../ports/repositories/iRole.repository";

export class getAllroleuc{
    constructor(private iRolerepository: IRoleRepository){}
    async  execute() : Promise<roleDtooutput[]>{
        const items = await this.iRolerepository.getAll();

        const output : roleDtooutput[] = items.map((item)=>{
            return {
                id : item.getId(),
                name : item.getName(),
                permissionIds : item.getPermissionIds()
            }
        })
        return output;
    }
}