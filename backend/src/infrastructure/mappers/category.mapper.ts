import { categoryEntity } from "../../domain/entities/category.entity"
import { categoryModel } from "../database/models/category.model";

export class categoryMapper{
    static todomain(docs : any)  { //db->entity
        const item  = docs.map((doc:any)=>{
            return new categoryEntity(doc._id , doc.title, doc.parentId, doc.status, doc.description);
        })
        return item;
    }
    static toPersistence(item : categoryEntity)  { //enity->db
        const doc = new categoryModel(
            {
                id : item.getId(),
                title : item.getTitle(),
                parentId : item.getParentId(),
                status : item.getStatus(),
                description : item.getDescription(),
                deleted : {
                    status : false,
                    deleteAt : null
                }
            }
        )
      return doc;
    }
  
  
  

}