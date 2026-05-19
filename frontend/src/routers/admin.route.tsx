
import LayoutAdmin from "../layouts/layoutAdmin";

function AdminRouter(){
return{
  path :  "/admin",
    element : <LayoutAdmin/>,
    children : [
        
    ]
}
}
export default AdminRouter;