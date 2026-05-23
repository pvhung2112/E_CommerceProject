import { Navigate, Outlet } from "react-router-dom";

function Protected(){
    const login = true;
    return(
        login ? <Outlet/> : <Navigate to="/login"/> 
    )
}
export default Protected;