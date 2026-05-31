import { getAllcategoryuc } from "../../usecases/categories/getAllcategory.usecase";
import { createOnecategoryuc } from "../../usecases/categories/createOnecategory.usecase";
export interface categorydependenceIject{
    getAllcategoryUc : getAllcategoryuc;
    createOnecategoryUc : createOnecategoryuc;
}