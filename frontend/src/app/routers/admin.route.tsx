import AdminLayout from "../../layouts/AdminLayout";
import Protected from "./configRoutes/protected.route";
import DashBoardPage from "../../pages/admin/users/DashBoardPage";
import ProductsPage from "../../pages/admin/products/ProductsPage";
import CreateProductPage from "../../pages/admin/products/createProductpage";
import OrdersPage from "../../pages/admin/oders/OrdersPage";
import CategoriesPage from "../../pages/admin/categories/categoriesPage";
import UsersPage from "../../pages/admin/UsersPage";
import SettingsPage from "../../pages/admin/SettingsPage";
import EditProductPage from "../../pages/admin/products/editProductpage";

//private
export const adminRouter = [
    {
        path : "/admin",
        element : <AdminLayout/>,
        children : [
            { 
                element : <Protected/>,
                children:  [
                    {
                        path: "dashboard",
                        element: <DashBoardPage/>
                    },
                    {
                        path: "products",
                        element: <ProductsPage/>,
                    },
                     {
                        path : "products/create",
                        element : <CreateProductPage/>
                    }, 
                    {
                        path : "products/edit/:id",
                        element : <EditProductPage/>
                    }
                    ,
                    {
                        path: "orders",
                        element: <OrdersPage/>
                    },
                    {
                        path: "categories",
                        element: <CategoriesPage/>
                    },
                    {
                        path: "users",
                        element: <UsersPage/>
                    },
                    {
                        path: "settings",
                        element: <SettingsPage/>
                    }
                ]
            }
        ]
    }
]