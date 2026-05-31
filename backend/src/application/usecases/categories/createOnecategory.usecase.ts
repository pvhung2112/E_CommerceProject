import { ICategoryRepository } from "../../ports/repositories/iCategory.repository";
import { categoryDtoinput, CategoryDtoOutput } from "../../ports/dtos/category.dto";
import { categoryEntity } from "../../../domain/entities/category.entity";
export class createOnecategoryuc{
    constructor(private icategoryRepository : ICategoryRepository){}
    async execute(dto : categoryDtoinput) : Promise<CategoryDtoOutput>{
      const category = new categoryEntity("",dto.title,dto.parentId,dto.status,dto.description);
     
        const item =  await this.icategoryRepository.save(category);
        const output = {
            id: item.getId(),
     title: item.getTitle(),
        description : item.getDescription() ,
        parentId : item.getParentId(),
        status: item.getStatus()
        }
return output
    }
}