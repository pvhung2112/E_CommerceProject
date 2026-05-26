import { productEntity } from "../../../domain/entities/product.entity";
import { priceObj } from "../../../domain/object-values/Price.obj";
import { productDtoinput, productDtooutput } from "../../ports/dtos/product.dto";
import { IproductRepository } from "../../ports/repositories/iProduct.repository";
import { productWithstats } from "../../ports/type/product.type";
export class editProductuc {
     constructor(private iproductRepository: IproductRepository) { }
     async excute(id: string, dto: productDtoinput): Promise<productDtooutput> {
          console.log("sửa sản phầm");
          const item: productWithstats = await this.iproductRepository.getDetail(id);
          console.log(item);

          item.data.setTitle(dto.title);
          const price = new priceObj(dto.price.amount, dto.price.currency);
          console.log(item.data.getPrice());
          item.data.setPrice(price);
          item.data.setDescription(dto.description);
          item.data.setImages(dto.images);
          item.data.setStock(dto.stock);
          item.data.setStatus(dto.status);
          item.data.setDiscountPercentage(dto.discountPercentage);

          const updatedProduct: productEntity = await this.iproductRepository.editOne(item.data);
          const output: productDtooutput = {
               id: updatedProduct.getId(),
               title: updatedProduct.getTitle(),
               price: {
                    amount: updatedProduct.getPrice().getAmount(),
                    currency: updatedProduct.getPrice().getCurrency()
               },
               description: updatedProduct.getDescription(),
               images: updatedProduct.getImages(),
               stock: updatedProduct.getStock(),
               sellerId: updatedProduct.getSellerId(),
               status: updatedProduct.getStatus(),
               discountPercentage: updatedProduct.getDiscountPercentage()
          }
          return output;
     }
}