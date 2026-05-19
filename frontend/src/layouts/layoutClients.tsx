import Footer from "../components/footer";
import Header from "../components/Header";
import Banner from "../components/heroBaner";
import Product from "../components/product";

function Layoutclients(){
    return (
        <>
        <Header/>
        <main className="content">
            <Banner/>
            <Product/>
        </main>
        <Footer/>
        </>
    )
}
export default Layoutclients;