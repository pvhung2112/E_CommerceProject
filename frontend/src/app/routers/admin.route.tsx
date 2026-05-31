import AdminLayout from "../../layouts/AdminLayout";
import Protected from "./configRoutes/protected.route";
import DashBoardPage from "../../pages/admin/users/DashBoardPage";

import OrdersPage from "../../pages/admin/oders/OrdersPage";
import CategoriesPage from "../../pages/admin/categories/categoriesPage";
import UsersPage from "../../pages/admin/UsersPage";
import SettingsPage from "../../pages/admin/SettingsPage";

import AdminLoginPage from "../../pages/admin/auth/adminLoginpage";

//private
export const adminRouter = [
    {
        path: "admin/login",
        element: <AdminLoginPage />
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                element: <Protected reDirect="/admin/login" />,
                children: [
                    {
                        path: "dashboard",
                        element: <DashBoardPage />
                    },
                    {
                        path: "orders",
                        element: <OrdersPage />
                    },
                    {
                        path: "categories",
                        element: <CategoriesPage />
                    },
                    {
                        path: "users",
                        element: <UsersPage />
                    },
                    {
                        path: "settings",
                        element: <SettingsPage />
                    }
                ]
            }
        ]
    }
]