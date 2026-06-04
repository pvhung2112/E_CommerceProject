import { roleEntity } from "../../domain/entities/role.entity";

export class roleMapper{
    static todomain(docs : any) : roleEntity[] {
        const roles = docs.map((item : any)=>{
            return new roleEntity(item.id,item.name,item.permissionIds);
        })
        return roles;
    }
}