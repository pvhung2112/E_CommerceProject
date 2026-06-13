import { accountEntity } from "../../domain/entities/account.entity";

export class accountMapper{
    static toDomain(docs : any) : accountEntity[] { //db->enity
        const items = docs.map((item : any)=>{
            return new accountEntity(item._id,item.name,item.email,item.password,item.rolesId,item.address,item.phone,item.refreshToken);

        })
        return items;
    }
}