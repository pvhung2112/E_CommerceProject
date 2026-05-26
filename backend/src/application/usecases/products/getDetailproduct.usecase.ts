import { productDtooutput } from "../../ports/dtos/product.dto";
import { IproductRepository } from "../../ports/repositories/iProduct.repository";
export class getDetailproductUc {
    constructor(private iproductRepository: IproductRepository) { }
    async execute(id: string): Promise<productDtooutput> {
        const item = await this.iproductRepository.getDetail(id);
        const output: productDtooutput = {
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
        return output;
    }
}