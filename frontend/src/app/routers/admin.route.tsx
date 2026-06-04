import AdminLayout from "../../layouts/AdminLayout";
import Protected from "./configRoutes/protected.route";
import AdminLoginPage from "../../pages/admin/auth/adminLoginpage";
import categoryRouter from "./childrens/category.route";
import permissionRouter from "./childrens/permission.route";
import DashboardPage from "../../pages/admin/dashboardPage";
import { Navigate } from "react-router-dom";
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
                        index : true,
                        element : <Navigate to="dashboard" replace/>
                    },
                    {
                        path : "dashboard",
                        element : <DashboardPage/>
                    },
                    ...permissionRouter(),
                    ...categoryRouter()
                ]
            }
        ]
    }
]