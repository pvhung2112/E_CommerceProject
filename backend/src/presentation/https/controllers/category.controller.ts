import { categorydependenceIject } from "../../../application/ports/containers/iCategory.container";
import { Request, Response } from "express";
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
}