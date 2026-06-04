import { productContainer } from "./product.container"
import { categoryContainer } from "./category.container"
import { roleContainer } from "./role.container"
import { permissionContainer } from "./permission.container"

export const Containers = () => {
    return {
        product: productContainer(),
        category: categoryContainer(),
        role: roleContainer(),
        permission : permissionContainer()
    }

}
export type dependencies = ReturnType<typeof Containers> 