import { Navigate, Outlet } from "react-router-dom";
export type props ={
    reDirect : string
}
function Protected( {reDirect} : props){
    const login = false;
    return(
        
        <main style={ {marginTop : "110px"} }>
            {login ? <Outlet/> : <Navigate to={reDirect}/>} 
        </main>
       
    )
}
export default Protected;