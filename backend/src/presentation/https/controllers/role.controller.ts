import { Request, Response } from "express"
import { iRoledependenceIject } from "../../../application/ports/containers/iRole.container"
import { updatePersinputdto } from "../../../application/ports/dtos/role.dto";


export class roleController {
    constructor(private deps: iRoledependenceIject) { }
    getAll = async (_req: Request, res: Response) => {
        const items = await this.deps.getAllroleUc.execute();
        res.status(200).json({
            status: true,
            data: items,
            message: "lấy danh sách thành công"
        })
    }
    updatePermissions = async (req: Request, res: Response) => {
        try {
            const input: updatePersinputdto[] = req.body;
            const data = await this.deps.updatePermissionsUc.execute(input);
            res.status(200).json({
                status: true,
                data: data,
                message: "Cập nhật quyền thành công"
            });
        } catch (error: any) {
            res.status(500).json({
                status: false,
                message: error.message || "Đã xảy ra lỗi khi cập nhật quyền"
            });
        }
    }
}