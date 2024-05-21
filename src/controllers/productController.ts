import {Request, Response} from 'express'
import Product from '../database/models/Product'
import { AuthRequest } from '../middleware/authMiddleware'


class ProductController{
  async addProduct(req:AuthRequest, res:Response):Promise<void>{
    const userId = req.user?.id
    const {productName, productDescription, productTotalStockQty, productPrice, categoryId} = req.body
    let fileName
    if(req.file){
      fileName = req.file?.filename
    }else{
      fileName= "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
    }
    if(!productName || ! productDescription || !productTotalStockQty || !productPrice || !categoryId){
      res.status(400).json({
        message: "please provide every details of the product"
      })
      return
    }
    await Product.create({
      productName,
      productDescription,
      productPrice,
      productTotalStockQty,
      productImageUrl: fileName,
      userId: userId,
      categoryId: categoryId
    })
    res.status(200).json({
      message: "product added successfully"
    })
  }
}

export default new ProductController()