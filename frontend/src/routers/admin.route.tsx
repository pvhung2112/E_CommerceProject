
import LayoutAdmin from "../layouts/layoutAdmin";
import Protected from "./protected.route";
//private
export const adminRouter = [
    {
        path : "/admin",
        element : <LayoutAdmin/>,
        children : [
            { 
                element : <Protected/>,
                children:  [
                    
                ]
            }
        ]
    }
]