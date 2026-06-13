
import { accountDtooutput } from "../../ports/dtos/account.dto";
import { IAccountRepository } from "../../ports/repositories/iAccount.repository";

export class getAllAccountuc{
    constructor(private iAccountRepository : IAccountRepository){}
    async execute() : Promise<accountDtooutput[]>{
        const items = await this.iAccountRepository.getAll();
        console.log(items);
        const output = items.map((item)=>{
            return {
                id : item.getId(),
                name : item.getName(),
                email : item.getEmail(),
                rolesId : item.getRolesId(),
                address : item.getAddress(),
                phone : item.getPhone()
            }
        })
        return output;
    }
}  