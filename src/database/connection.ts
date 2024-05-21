import {Sequelize} from 'sequelize-typescript'
import Product from './models/Product'
import User from './models/User'
import Category from './models/Category'

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  dialect: 'mysql',
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  models: [__dirname + "/models"] //yo connection.ts vanne file jun directory ma xa, tei directory name vitra models vanne ma xa. database ma tables banaunuparxa ni. tyo tables ko code kaha hunxa ta vanne bujhako models le(model haru kaha hunxa)
})

sequelize.authenticate()
.then(()=>{
  console.log("connected")
})
.catch((err)=>{
  console.log(err)
})

sequelize.sync({force:false}).then(()=>{
  console.log("synced !!!")
})

// //Relationships
// User.hasMany(Product,{foreignKey: 'userId'})
// Product.belongsTo(User,{foreignKey: 'userId'})

// Product.belongsTo(Category,{foreignKey:'categoryId'})
// Category.hasOne(Product,{foreignKey: 'categoryId'})

export default sequelize

// Product.hasOne(Category,{foreignKey: 'categoryId'})
// Category.belongsTo(Product,{foreignKey:'categoryId'})