import { categoryEntity } from "../../domain/entities/category.entity"

export class categoryMapper{
    static todomain(docs : any)  {
        const item  = docs.map((doc:any)=>{
            return new categoryEntity(doc._id , doc.title, doc.position, doc.parentId, doc.status, doc.description);
        })
        return item;
    }
}