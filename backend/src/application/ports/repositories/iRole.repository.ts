import { roleEntity } from "../../../domain/entities/role.entity";
export interface IRoleRepository {
    getAll(): Promise<roleEntity[]>;
    getByids(ids: string[]): Promise<roleEntity[]>;
    saveMany(roles : roleEntity[]) : Promise<roleEntity[]>;
}