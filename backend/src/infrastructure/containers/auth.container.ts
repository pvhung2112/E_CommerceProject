import { iAuthdependenceIject } from "../../application/ports/containers/iAuth.container";
import { IAccountRepository } from "../../application/ports/repositories/iAccount.repository"
import { accountRepository } from "../database/repositories/auth.repository"
import { loginAccountuc } from "../../application/usecases/auth/loginAccount.usecase";
export const authContainer = () : iAuthdependenceIject =>{
    const accountRepo : IAccountRepository = new accountRepository();
    return {
        loginAccountUc : new loginAccountuc(accountRepo)
    }
}