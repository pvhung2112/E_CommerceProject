import CategoryPage from "../../../pages/admin/category/categoryPage";
import CreateCategoryPage from "../../../pages/admin/category/categoryCreatepage";

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