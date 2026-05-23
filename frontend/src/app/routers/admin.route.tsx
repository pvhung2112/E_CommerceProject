
import AdminLayout from "../../layouts/AdminLayout";
import Protected from "./configRoutes/protected.route";
import Dashboard from "../../pages/admin/Dashboard";
import Products from "../../pages/admin/Products";
import Orders from "../../pages/admin/Orders";
import Categories from "../../pages/admin/Categories";
import Users from "../../pages/admin/Users";
import Settings from "../../pages/admin/Settings";
import CreateProduct from "../../pages/admin/createProduct";


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
                        element: <Dashboard/>
                    },
                    {
                        path: "products",
                        element: <Products/>,
                    },
                     {
                        path : "products/create",
                        element : <CreateProduct/>
                    },
                    {
                        path: "orders",
                        element: <Orders/>
                    },
                    {
                        path: "categories",
                        element: <Categories/>
                    },
                    {
                        path: "users",
                        element: <Users/>
                    },
                    {
                        path: "sellers",
                        element: <Users/>
                    },
                    {
                        path: "analytics",
                        element: <Dashboard/>
                    },
                    {
                        path: "settings",
                        element: <Settings/>
                    }
                ]
            }
        ]
    }
]