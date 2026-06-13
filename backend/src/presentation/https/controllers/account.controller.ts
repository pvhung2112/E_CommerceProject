import { Request, Response } from "express";
import { iAccountdependenceIject } from "../../../application/ports/containers/iAccount.container";
import { iAuthdependenceIject } from "../../../application/ports/containers/iAuth.container";
import { LoginDtoInput } from "../../../application/ports/dtos/auth.dto";
export class accountController {
    constructor(private deps : iAccountdependenceIject | iAuthdependenceIject){}
    getAll = async (_req: Request, res: Response): Promise<void> => {
         const accountDeps = this.deps as iAccountdependenceIject;
       const accounts = await accountDeps.getAllAccountUc.execute();
         res.status(200).json({
            status: true,
            data: accounts
        })
    } 
    loginAccount = async (req : Request, res : Response) : Promise<void> =>{
        const authDeps = this.deps as iAuthdependenceIject;
        const input : LoginDtoInput = {
            email : req.body.email,
            password : req.body.password
        }
        const result =  await authDeps.loginAccountUc.execute(input);

        res.cookie('refreshToken', result.refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000 
        });
        const { refreshToken, ...data } = result;
        res.status(201).json({ 
            status: true,
            data: data
        });
    }
}