import { productContainer } from "./product.container"
import { categoryContainer } from "./category.container"
import { roleContainer } from "./role.container"
export const Containers = () =>{
   return {
        product : productContainer(),
        category : categoryContainer(),
        role : roleContainer()
    }
    
}
export type dependencies = ReturnType<typeof Containers> 