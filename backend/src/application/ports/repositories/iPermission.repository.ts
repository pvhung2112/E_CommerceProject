import { permissionEntity } from "../../../domain/entities/permission.entity";
export interface IPermissionRepository {
getAll() : Promise<permissionEntity[]>;
}