import { permissiondependenceIject } from "../../../application/ports/containers/iPermission.container";
import { Request, Response } from "express";
export class permissionController{
    constructor(private deps : permissiondependenceIject){}
    getAll = async (_req : Request, res : Response) => {
        const items = await this.deps.getAllpermissionUc.execute();
        console.log(items);
          res.status(200).json({
            status: true,
            data: items,
            message: "lấy danh sách thành công"
        })
    }
}