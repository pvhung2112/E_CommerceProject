import { productEntity } from "../../../domain/entities/product.entity";
import { productDtoinput } from "../../ports/dtos/product.dto";
import { productDtooutput } from "../../ports/dtos/product.dto";
import { IproductRepository } from "../../ports/repositories/iProduct.repository";
import { priceObj } from "../../../domain/object-values/Price.obj";
export class createProductUc {
    constructor(private iproductRepository: IproductRepository) { }
    async execute(dto: productDtoinput): Promise<productDtooutput> {
        const price =  new priceObj(dto.price.amount,dto.price.currency);
        const product = new productEntity("",dto.name.toString(),price,Date.now().toString(),[],dto.description.toString());
        const item = await this.iproductRepository.save(product);
        console.log('create product usecase');
        console.log(item);
        const output: productDtooutput = {
            id: item.getId(),
            name: item.getName(),
            price: {
                amount: item.getPrice().getAmount(),
                currency: item.getPrice().getCurrency()
            },
            description: item.getDescription(),
            create_at: item.getCreateAt()
        }
        return output;
    }
}