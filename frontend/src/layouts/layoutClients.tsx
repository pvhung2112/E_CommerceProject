import { Outlet } from "react-router-dom";
import Footer from "../shared/partials/footer";
import Header from "../shared/partials/Header";


function Layoutclients(){
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default Layoutclients;