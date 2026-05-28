import { productType } from "./product.type"

export type objForm = {
    type : boolean,
    value : string,
    display : boolean
    data ?: productType | null
}