import { iAccountdependenceIject } from "../../application/ports/containers/iAccount.container";
import { IAccountRepository } from "../../application/ports/repositories/iAccount.repository"
import { accountRepository } from "../database/repositories/auth.repository"
import { getAllAccountuc } from "../../application/usecases/accounts/getAllaccount.usecase";
export const accountContainer =() : iAccountdependenceIject =>{
    const accountRepo : IAccountRepository = new accountRepository();
    return {
        getAllAccountUc : new getAllAccountuc(accountRepo)
    }
}