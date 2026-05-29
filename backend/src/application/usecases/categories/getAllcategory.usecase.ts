import { ICategoryRepository } from "../../ports/repositories/iCategory.repository";

export class getAllcategoryuc{
    constructor(private icategoryRepository : ICategoryRepository){}
    async execute(){
        const items = await this.icategoryRepository.getAll();
      const output =   items.map((item)=>{
            return {
                id : item.getId(),
                title : item.getTitle(),
                description : item.getDescription(),
                parentId : item.getParentId(),
                status : item.getStatus()
            };
        });
        
        return output;
    }
}