import mongoose from "mongoose";
import { IRoleRepository } from "../../../application/ports/repositories/iRole.repository";
import { roleEntity } from "../../../domain/entities/role.entity";
import { roleMapper } from "../../mappers/role.mapper";
import { roleModel } from "../models/role.model";
export class roleRepository implements IRoleRepository {
    async getAll(): Promise<roleEntity[]> {
        const docs = await roleModel.find({});
        const items = roleMapper.todomain(docs);
        return items;
    }
    async getByids(ids: string[]): Promise<roleEntity[]> {
        const docs = await roleModel.find({
            _id: { $in: ids }
        });
        console.log(docs);

        const items = roleMapper.todomain(docs);
        return items;
    }
    async saveMany(roles: roleEntity[]): Promise<roleEntity[]> {
        const bulk = roles.map((item) => {
            return {
                updateOne: {
                    filter: { _id: new mongoose.Types.ObjectId(item.getId()) },
                    update: {
                        $set: {
                            name: item.getName(),
                            permissionIds: item.getPermissionIds().map(id => new mongoose.Types.ObjectId(id))
                        }
                    }
                    , upsert: true
                }
            }

        })
        await roleModel.bulkWrite(bulk);
        return roles;
    }
}