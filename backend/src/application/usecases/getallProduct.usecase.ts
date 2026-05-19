import { IproductRepository } from "../ports/repositories/iProduct.repository";
import { productDtooutput } from "../ports/dtos/product.dto";

export class getallProductUc {
    constructor(private iproductRepository: IproductRepository) { }
    async execute(): Promise<productDtooutput[]> {
        const items = await this.iproductRepository.getAll();
        const outputs: productDtooutput[] = items.map((item) => {
            return {
                id: item.getId(),
                name: item.getName(),
                price: {
                    amount: item.getPrice().getAmount(),
                    currency: item.getPrice().getCurrency()
                },
                create_at: item.getCreateAt()
            }

        })
        console.log(outputs);
        return outputs;
    }
}