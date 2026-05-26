import { IproductRepository } from "../../ports/repositories/iProduct.repository";
import { productDtooutput } from "../../ports/dtos/product.dto";

export class getallProductUc {
    constructor(private iproductRepository: IproductRepository) { }
    async execute(): Promise<productDtooutput[]> {
        const items = await this.iproductRepository.getAll();
        const outputs: productDtooutput[] = items.map((item) => {
            return {
                id: item.data.getId(),
                title : item.data.getTitle(),
                price: {
                    amount: item.data.getPrice().getAmount(),
                    currency: item.data.getPrice().getCurrency()
                },
                description : item.data.getDescription(),
                images: item.data.getImages(),
                stock : item.data.getStock(),
                sellerId : item.data.getSellerId(),
                status : item.data.getStatus(),
                discountPercentage : item.data.getDiscountPercentage(),
                 rating: item.rating,
                ratingCount: item.ratingCount,
                sold: item.sold
            }

        })
        console.log(outputs);
        return outputs;
    }
}