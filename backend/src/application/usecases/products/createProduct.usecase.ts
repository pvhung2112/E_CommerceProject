import { productDtoinput } from "../../ports/dtos/product.dto";
import { productDtooutput } from "../../ports/dtos/product.dto";
import { IproductRepository } from "../../ports/repositories/iProduct.repository";
export class createProductUc{
    constructor(private iproductRepository: IproductRepository) { }
    async execute(dto : productDtoinput) : Promise<productDtooutput>{
      const product =   await this.iproductRepository.save(dto);
        console.log('create product usecase');
        console.log(product);
        const output : productDtooutput = {
            id : product.getId(),
            name : product.getName(),
    price : {
        amount : product.getPrice().getAmount(),
        currency : product.getPrice().getCurrency()
    },
    description : product.getDescription(),
    create_at : product.getCreateAt()
        }
        return output;
    }  
}