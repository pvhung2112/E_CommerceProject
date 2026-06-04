import { IRoleRepository } from "../../../application/ports/repositories/iRole.repository";
import { roleEntity } from "../../../domain/entities/role.entity";
import { roleMapper } from "../../mappers/role.mapper";
import { roleModel } from "../models/role.model";
export class roleRepository implements IRoleRepository{
    async getAll(): Promise<roleEntity[]> {
        const docs = await roleModel.find({});
        const items = roleMapper.todomain(docs);
        return items;
    }
}