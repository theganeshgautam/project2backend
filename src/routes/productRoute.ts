import express, {Router} from 'express'
import authMiddleware, {Role} from '../middleware/authMiddleware'
import productController from '../controllers/productController'
import {multer, storage} from '../middleware/multerMiddleware'

const upload = multer({storage: storage})
const router:Router = express.Router()

router.route("/").post(authMiddleware.isAuthenticated,authMiddleware.restrictTo(Role.Admin),upload.single('image'),productController.addProduct)

//yaha restrictTo(Role.Admin) gareko vayera only admin le matra tyo route access garna payo i.e., product add garne route
//yaha multiple access pani dina milxa eg; restrictTo(Role.Customer,Role.Admin)


export default router