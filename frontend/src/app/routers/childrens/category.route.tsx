import CategoryPage from "../../../pages/clients/category/categoryPage";
import CreateCategoryPage from "../../../pages/clients/category/categoryCreatepage";

function categoryRouter(){

    return [
        {
            path : "category",
            element : <CategoryPage/>
        },
        {
            path : "category/create",
            element : <CreateCategoryPage/>
        }
    ]
}
export default categoryRouter;