import EditProductPage from "../../../pages/clients/products/editProductpage";
import ProductsPage from "../../../pages/clients/products/ProductsPage";
import CreateProductPage from "../../../pages/clients/products/createProductpage";
function ProductRouter() {
    return [
        {
            path: "products",
            element: <ProductsPage />,
        },
        {
            path: "products/create",
            element: <CreateProductPage />
        },
        {
            path: "products/edit/:id",
            element: <EditProductPage />
        }
    ]
}
export default ProductRouter;