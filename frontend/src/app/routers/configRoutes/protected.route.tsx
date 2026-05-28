import { Navigate, Outlet } from "react-router-dom";
export type props ={
    reDirect : string
}
function Protected( {reDirect} : props){
    const login =true;
    return(
        login ? <Outlet/> : <Navigate to={reDirect}/> 
    )
}
export default Protected;