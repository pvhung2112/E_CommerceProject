import Banner from "../shared/partials/heroBaner";
import ProductList from "../features/products/components/productList";
function Home(){
    return(
        <>
        <main className="content">
            <Banner/>
            <ProductList/>
        </main>
        </>
    )
        
}
export default Home;