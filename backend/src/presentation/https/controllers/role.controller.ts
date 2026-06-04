import { Request,Response } from "express"
import { iRoledependenceIject } from "../../../application/ports/containers/iRole.container"
export class roleController{
    constructor(private deps : iRoledependenceIject){}
    getAll = async (_req : Request,res : Response)=>{
    const items = await this.deps.getAllroleUc.execute();
    res.status(200).json({
        status: true,
        data: items,
        message: "lấy danh sách thành công"
    })
    }
}