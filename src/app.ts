import express, {Application, Request, Response} from 'express'
import userRoute from './routes/userRoute'
import productRoute from './routes/productRoute'

const app:Application= express()
const PORT:number = 3000;

import * as dotenv from 'dotenv'
dotenv.config()
import './database/connection'
import adminSeeder from './adminSeeder';
import categoryController from './controllers/categoryController';


app.use(express.json())

//admin seeder
adminSeeder()


// localhost:3000/register
// yaha /register chai userRoute bata aako ho, check it there
app.use("/",userRoute)
app.use("/admin/product", productRoute)
//route haru yaha last ma append hunxa

app.listen(PORT,async()=>{
   await categoryController.seedCategory()
  console.log("Server has started at port", PORT)
})