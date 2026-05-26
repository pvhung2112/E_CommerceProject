import { productEntity } from "../../../domain/entities/product.entity";
import { productDtoinput } from "../../ports/dtos/product.dto";
import { productDtooutput } from "../../ports/dtos/product.dto";
import { IproductRepository } from "../../ports/repositories/iProduct.repository";
import { priceObj } from "../../../domain/object-values/Price.obj";
export class createProductUc {
    constructor(private iproductRepository: IproductRepository) { }
    async execute(dto: productDtoinput): Promise<productDtooutput> {
        const price = new priceObj(dto.price.amount, dto.price.currency);
        const userId = "1234567890"; // Lấy userId từ context hoặc authentication
        const product = new productEntity("", dto.title, price, dto.images, dto.description, dto.stock, userId, dto.status, dto.discountPercentage);
        const item = await this.iproductRepository.save(product);
        console.log('create product usecase');
        console.log(item);
        const output: productDtooutput = {
            id: item.getId(),
            title: item.getTitle(),
            price: {
                amount: item.getPrice().getAmount(),
                currency: item.getPrice().getCurrency()
            },
            description: item.getDescription(),
            images: item.getImages(),
            stock: item.getStock(),
            sellerId: item.getSellerId(),
            status: item.getStatus(),
            discountPercentage: item.getDiscountPercentage()
        }
        return output;
    }
}