import { categorydependenceIject } from "../../../application/ports/containers/iCategory.container";
import { Request, Response } from "express";
import {categoryDtoinput } from "../../../application/ports/dtos/category.dto";
export class categoryController{
    constructor(private deps : categorydependenceIject){}
    getAllcategory = async (_req : Request, res : Response) : Promise<void> =>{
        const categories = await this.deps.getAllcategoryUc.execute();
        res.status(200).json(
            {
            status: true,
            data: categories
            }
        )
    }
    createOnecategory = async (req : Request, res : Response) : Promise<void> =>{
        const dto : categoryDtoinput = {
            title: req.body.title,
            description: req.body.description,
            parentId: req.body.parentId,
            status: req.body.status
        }
        
        const category = await this.deps.createOnecategoryUc.execute(dto);
        console.log(category);
        res.status(201).json(
            {
            status: true,
            data: category,
            message: "Tạo danh mục thành công"
            }
        )
    }
}