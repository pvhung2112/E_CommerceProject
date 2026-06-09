


import { roleDtooutput, updatePersinputdto } from "../../ports/dtos/role.dto";
import { IRoleRepository } from "../../ports/repositories/iRole.repository";

export class updatePermissionsuc {
    constructor(private iRoleRepository: IRoleRepository) { }

    async execute(input: updatePersinputdto[]): Promise<roleDtooutput[]> {
        const ids = input.map((item) => item.id);
        const items = await this.iRoleRepository.getByids(ids);
        console.log(items);
        items.forEach((item) => {
            const updateInfo = input.find((i) => i.id == item.getId());
            if (updateInfo) {
                item.setPermissionIds(updateInfo.permissionIds);
            }
        })
        const roles = await this.iRoleRepository.saveMany(items);
        const output: roleDtooutput[] = roles.map((item) => {
            return {
                id: item.getId(),
                name: item.getName(),
                permissionIds: item.getPermissionIds()
            }
        });
        return output;
    }

}