import { roleEntity } from "../../domain/entities/role.entity";
import { roleModel } from "../database/models/role.model";

export class roleMapper {
    static todomain(docs: any): roleEntity[] {
        const roles = docs.map((item: any) => {
            return new roleEntity(item._id, item.name, item.permissionIds);
        })
        return roles;
    }
    static toPersistence(item: roleEntity) {

        const role = new roleModel(
            {
                name: item.getName(),
                permissionIds: item.getPermissionIds()
            }
        )
        return role;
    }
}