import { productContainer } from "./product.container"
import { categoryContainer } from "./category.container"
export const Containers = () =>{
   return {
        product : productContainer(),
        category : categoryContainer()
    }
    
}
export type dependencies = ReturnType<typeof Containers> 