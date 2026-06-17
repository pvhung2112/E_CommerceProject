import { Request, Response } from "express";
import { iAccountdependenceIject } from "../../../application/ports/containers/iAccount.container";
import { iAuthdependenceIject } from "../../../application/ports/containers/iAuth.container";
import { LoginDtoInput } from "../../../application/ports/dtos/auth.dto";
import { JwtService } from "../../../infrastructure/services/jwt.service";
export class accountController {
    constructor(private deps : iAccountdependenceIject | iAuthdependenceIject){}
    getAll = async (req: Request, res: Response): Promise<void> => {
        console.log((req as any).user);
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
            sameSite: 'none',
            maxAge: 7 * 24 * 60 * 60 * 1000 
        });
        const { refreshToken, ...data } = result;
        res.status(201).json({ 
            status: true,
            data: data
        });
    }
    refreshToken = async(req : Request, res : Response)=>{
        try {
            const currentRefreshtoken = req.cookies.refreshToken;
        console.log(currentRefreshtoken);
        if(!currentRefreshtoken){
            res.status(401).json({ message: 'Không tìm thấy Refresh Token, vui lòng đăng nhập!' });
            return;
        }
        const decoded = JwtService.verifyRefreshToken(currentRefreshtoken);
        const newAccesstoken = JwtService.generateAccessToken({
            id : decoded.id
        })
        res.status(201).json({
            status: true,
            data: {
                accessToken: newAccesstoken
            }
        })
        } catch (error) {
            res.clearCookie('refreshToken'); 
        
            res.status(403).json({ message: 'Refresh Token đã hết hạn hoặc không hợp lệ, vui lòng đăng nhập lại!' });
        }
        

    }
}