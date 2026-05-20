
import ProductDetail from "../components/productDetail";
import Layoutclients from "../layouts/layoutClients";
import Account from "../pages/account";
import Dashbroad from "../pages/dashbroad";
import Protected from "./protected.route";
export const  ClientRouter =  [
//public
    {   
        path : "/",
        element : <Layoutclients/>,
        children : [
            {
            index : true,
            element : <Dashbroad/>
            
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