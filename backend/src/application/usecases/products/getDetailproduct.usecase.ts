import { productDtooutput } from "../../ports/dtos/product.dto";
import { IproductRepository } from "../../ports/repositories/iProduct.repository";
export class getDetailproductUc {
    constructor(private iproductRepository: IproductRepository) { }
    async execute(id: string): Promise<productDtooutput> {
        const item = await this.iproductRepository.getDetail(id);
        const output : productDtooutput = {
           id: item.getId(),
                name: item.getName(),
                price: {
                    amount: item.getPrice().getAmount(),
                    currency: item.getPrice().getCurrency()
                },
                 description : item.getDescription(),
                create_at: item.getCreateAt()
        }
      return output;
    }
}