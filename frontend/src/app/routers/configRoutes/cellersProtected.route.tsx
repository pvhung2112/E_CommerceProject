import { Navigate, Outlet } from "react-router-dom";

function CellerProtected(){
    const protectedCellers = true;
    
    return(
        protectedCellers ?  <Outlet/>:  <Navigate to="/"/>
    )
}
export default CellerProtected;
