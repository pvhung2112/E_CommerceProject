
import LayoutClients from "../../layouts/layoutClients";
import Homepage from "../../pages/clients/HomePage";
import ProductDetailPage from "../../pages/clients/ProductDetailPage";
import AccountPage from "../../pages/clients/AccountPage";
import Protected from "./configRoutes/protected.route";
import ClientsLoginPage from "../../pages/clients/auth/clientLoginpage";
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
                    }
                ]
            }
        ]

    }
]   