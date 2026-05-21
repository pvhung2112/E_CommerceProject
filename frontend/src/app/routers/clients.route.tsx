
import ProductDetail from "../../features/products/components/productDetail";
import Layoutclients from "../../layouts/layoutClients";
import Account from "../../pages/account";
import Home from "../../pages/home";
import Protected from "./configRoutes/protected.route";
export const  ClientRouter =  [
//public
    {   
        path : "/",
        element : <Layoutclients/>,
        children : [
            {
            index : true,
            element : <Home/>
            
            },
            {
                path : "product/:id",
                element : <ProductDetail/>
            }
        ]
    },
    //private
    {   
        element : <Layoutclients/>,
        children : [
            {
                path : "/",
                element : <Protected/>,
                children : [
                    {
                        path : "account",
                        element : <Account/>
                    }
                ]
             }   
        ]

    }
]   