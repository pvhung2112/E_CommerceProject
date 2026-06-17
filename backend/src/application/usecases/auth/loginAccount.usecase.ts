import { JwtService } from "../../../infrastructure/services/jwt.service";
import { LoginDtoInput, LoginDtoOutput } from "../../ports/dtos/auth.dto";
import { IAccountRepository } from "../../ports/repositories/iAccount.repository";
import bcrypt from 'bcrypt'; 
export class loginAccountuc{
    constructor(private iAccountRepository : IAccountRepository){}
    async execute(input : LoginDtoInput) : Promise<LoginDtoOutput>{
        const account = await this.iAccountRepository.getByemail(input.email);
        console.log(account);
        if (!account) {
        throw new Error('Email không tồn tại');
        }
        console.log("Mật khẩu Postman:", input.password);
        console.log("Mật khẩu trong DB:", account.getPassword());
        const isPasswordValid = await bcrypt.compare(input.password, account.getPassword());
        if (!isPasswordValid) {
        throw new Error('Mật khẩu sai');
        }

        const accessTokenJwt = JwtService.generateAccessToken({
                id  : account.getId(),
                email : account.getEmail(),
                rolesId : account.getRolesId()
        })
        const refreshTokenJwt = JwtService.generateRefreshToken({
        id: account.getId()
        });
        const output = {
            accessToken: accessTokenJwt,
            refreshToken:  refreshTokenJwt,
            user: { 
                id: account.getId(),
                name : account.getName(),
                email: account.getEmail(),
                rolesId: account.getRolesId()
                }
        }
        return output;
    }
}