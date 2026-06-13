import { IAccountRepository } from "../../../application/ports/repositories/iAccount.repository";
import { accountEntity } from "../../../domain/entities/account.entity";
import { accountMapper } from "../../mappers/account.mapper";
import { accountModel } from "../models/account.model";

export class accountRepository implements IAccountRepository{
    async getAll(): Promise<accountEntity[]> {
        const docs = await accountModel.find({}).lean();
        const items = accountMapper.toDomain(docs);
        return items;
    }
    async getByemail(email : string) :  Promise<accountEntity>{
        const  find = {
            email : email
        }
       const doc = await accountModel.findOne(find).lean();
       console.log(doc);
        const [item] = accountMapper.toDomain([doc]);
        return item; 
     }
}