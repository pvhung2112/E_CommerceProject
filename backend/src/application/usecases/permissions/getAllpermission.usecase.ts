import { permissionDtooutput } from "../../ports/dtos/permission.dto";
import { IPermissionRepository } from "../../ports/repositories/iPermission.repository";

export class getAllpermissionuc{
    constructor(private iPermissionrepository : IPermissionRepository){}
   async execute() : Promise<permissionDtooutput[]> {
        const items = await this.iPermissionrepository.getAll();
        console.log(items);
        const output =  items.map((item)=>{
            return {
                id : item.getId(),
                name : item.getName(),
                slug : item.getSlug(),
                group : item.getGroup()
            }
        })
        return output;
    }
}