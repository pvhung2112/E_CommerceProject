import { productContainer } from "./product.container"
import { categoryContainer } from "./category.container"
import { roleContainer } from "./role.container"
import { permissionContainer } from "./permission.container"
import { accountContainer } from "./account.container"
import { authContainer } from "./auth.container"

export const Containers = () => {
    return {
        product: productContainer(),
        category: categoryContainer(),
        role: roleContainer(),
        permission : permissionContainer(),
        account : accountContainer(),
        auth : authContainer()
    }

}
export type dependencies = ReturnType<typeof Containers> 