import { productContainer } from "./product.container"
export const Containers = () =>{
   return {
        product : productContainer()
    }
    
}
export type dependencies = ReturnType<typeof Containers> 