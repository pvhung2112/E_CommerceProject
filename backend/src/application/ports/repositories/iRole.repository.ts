import { roleEntity } from "../../../domain/entities/role.entity";
export interface IRoleRepository {
    getAll(): Promise<roleEntity[]>;
    // updatePermissions(ids: string[], permissionids: string[]): Promise<roleEntity[]>;
}