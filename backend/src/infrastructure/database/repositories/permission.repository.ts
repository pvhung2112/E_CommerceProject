import {IPermissionRepository} from "../../../application/ports/repositories/iPermission.repository";
import {permissionEntity} from "../../../domain/entities/permission.entity";
import { permissionModel } from "../models/permission.model";
export  class permissionRepository implements IPermissionRepository{
   async getAll(): Promise<permissionEntity[]> {
      const docs = await permissionModel.find({});
    
      const items =   docs.map((doc)=>{
            return new permissionEntity( doc._id.toString(),
                doc.name as string,
                doc.group as string,
                doc.slug as string )
        })
        return items;
    }
}
