import { accountEntity } from "../../../domain/entities/account.entity";

export interface IAccountRepository{
    getAll() : Promise<accountEntity[]>;
    getByemail(email : string) :  Promise<accountEntity>;
}