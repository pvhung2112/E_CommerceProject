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