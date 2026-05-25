import { productEntity } from "../../../domain/entities/product.entity";
import { priceObj } from "../../../domain/object-values/Price.obj";
import { productDtoinput, productDtooutput } from "../../ports/dtos/product.dto";
import { IproductRepository } from "../../ports/repositories/iProduct.repository";
export class editProductuc {
     constructor(private iproductRepository: IproductRepository) { }
     async excute(id : string , dto: productDtoinput): Promise<productDtooutput> {
          console.log("sửa sản phầm");
          const item : productEntity = await this.iproductRepository.getDetail(id);
          console.log(item);
          item.setName(dto.name);
          const price = new priceObj(dto.price.amount, dto.price.currency);
          console.log(item.getPrice());
          item.setPrice(price);
          item.setDescription(dto.description);
          const updatedProduct : productEntity = await this.iproductRepository.editOne(item);
          const output : productDtooutput  = {
               id: updatedProduct.getId(),
               name: updatedProduct.getName(),
               price: {
                    amount: updatedProduct.getPrice().getAmount(),
                    currency: updatedProduct.getPrice().getCurrency()
               },
               description: updatedProduct.getDescription(),
               create_at: updatedProduct.getCreateAt()
          }
          return output;
     }
}