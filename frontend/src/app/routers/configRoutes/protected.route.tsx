import { Navigate, Outlet } from "react-router-dom";

function Protected(){
    const login = false;
    return(
        login ? <Outlet/> : <Navigate to="/login"/> 
    )
}
export default Protected;