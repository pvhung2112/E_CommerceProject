import { categoryRepository } from "../database/repositories/category.repository"
import { categorydependenceIject } from "../../application/ports/containers/iCategory.container";
import { getAllcategoryuc } from "../../application/usecases/categories/getAllcategory.usecase";
import { createOnecategoryuc } from "../../application/usecases/categories/createOnecategory.usecase";
export const categoryContainer =() : categorydependenceIject=>{
    const categoryRep = new categoryRepository();
    return(
        {
         getAllcategoryUc : new getAllcategoryuc(categoryRep),
         createOnecategoryUc : new createOnecategoryuc(categoryRep)
        }
    )
}