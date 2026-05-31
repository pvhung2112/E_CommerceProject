
import LayoutClients from "../../layouts/layoutClients";
import Homepage from "../../pages/clients/HomePage";
import ProductDetailPage from "../../pages/clients/ProductDetailPage";
import AccountPage from "../../pages/clients/AccountPage";
import Protected from "./configRoutes/protected.route";
import ClientsLoginPage from "../../pages/clients/auth/clientLoginpage";
import { Navigate } from "react-router-dom";
import CellerProtected from "./configRoutes/cellersProtected.route";
import ProductRouter from "./childrens/product.route";
import CellersPage from "../../pages/clients/cellers/cellersPage";
import CellerDashboard from "../../features/cellsers/components/Dashboard";
export const ClientRouter = [
    {
        path: "/login",
        element: <ClientsLoginPage />
    }
    ,
    //public
    {
        path: "/",
        element: <LayoutClients />,
        children: [
            {
                index: true,
                element: <Homepage />
            },
            {
                path: "product/:id",
                element: <ProductDetailPage />
            }
        ]
    },
    //private
    {
        element: <LayoutClients />,
        children: [
            {
                path: "/",
                element: <Protected reDirect="/login" />,
                children: [
                    {
                        path: "account",
                        element: <AccountPage />
                    },
                    {
                        path: "cellers",
                        element: <CellerProtected />,
                        children: [
                            {   

                                element: <CellersPage />,
                                children: [
                                    {   index : true,
                                         element: <Navigate to="dashboard" replace/>
                                    },
                                    {
                                        path: "dashboard",
                                         element: <CellerDashboard />
                                    }
                                    ,
                                    [...ProductRouter()]
                                ]
                            }
                        ]
                    }

                ]
            }
        ]

    }
]   