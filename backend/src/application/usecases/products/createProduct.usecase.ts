import { productDtoinput } from "../../ports/dtos/product.dto";
import { IproductRepository } from "../../ports/repositories/iProduct.repository";
export class createProductUc{
    constructor(private iproductRepository: IproductRepository) { }
    async execute(dto : productDtoinput) : Promise<void>{
        await this.iproductRepository.save(dto);
        console.log('create product usecase');
    }  
}