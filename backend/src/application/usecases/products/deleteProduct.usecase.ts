import { IproductRepository } from "../../ports/repositories/iProduct.repository";
export class deleteOneproductUc{
    constructor(private iproductRepository: IproductRepository) { }
    execute(id : string){
        this.iproductRepository.deleteOne(id);
        
    }
}