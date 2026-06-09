import { productdependenceIject } from "../../../application/ports/containers/iProduct.container";
import { Request, Response } from "express";
import { productDtoinput } from "../../../application/ports/dtos/product.dto";
export class productController {
    constructor(private deps: productdependenceIject) { }
    getallProduct = async (_req: Request, res: Response): Promise<void> => {
        const products = await this.deps.getallproductUc.execute();
        res.status(200).json({
            status: true,
            data: products
        })
    }
    getDetailproduct = async (req: Request<{ id: string }>, res: Response): Promise<void> => {
        const id = req.params.id;
        const product = await this.deps.getdetailproductUc.execute(id);
        res.status(200).json({
            status: true,
            data: product
        })
    }
    createProduct = async (req: Request, res: Response): Promise<void> => {
     
        const dto: productDtoinput = {
            title: req.body.name,
            price: {
                amount: req.body.amount,
                currency: req.body.currency
            },
            description: req.body.description,
            images: req.body.images,
            stock: req.body.stock,
            status: req.body.status,
            discountPercentage: req.body.discountPercentage
        }
        const product = await this.deps.createproductUc.execute(dto);
        console.log(product);
        res.status(201).json({
            status: true,
            data: product,
            message: "Tạo sản phẩm thành công"
        })
    }
    editProduct = async (req: Request<{id : string}>, res: Response): Promise<void> => {
   
        const {id}  = req.params;
        const dto: productDtoinput = {
            title: req.body.name,
            price: {
                amount: req.body.amount,
                currency: req.body.currency
            },
            description: req.body.description,
            images: req.body.images,
            stock: req.body.stock,
            status: req.body.status,
            discountPercentage: req.body.discountPercentage
        }
        const product = await this.deps.updateOneproductuc.excute(id,dto);
        console.log(product);
        res.status(200).json({
            status: true,
            data: product,
            message: "sửa sản phẩm thành công"
        })

    }
    deleteProduct= async(req : Request<{id : string}>,res : Response) : Promise<void>=>{
        const {id} = req.params;
        await this.deps.deleteOneproductuc.execute(id);
        res.status(200).json({
            status: true,
            message: "xóa sản phẩm thành công"
        })
    }
}
