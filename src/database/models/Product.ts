
import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript'

@Table({
  tableName: 'products', //yo jaile plural
  modelName: 'Product', // yo jaile singular
  timestamps: true
})

class Product extends Model{
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4
  })
  declare id:string

  @Column({
    type: DataType.STRING,
    allowNull : false //mongoose ma required: true garejasto
  })
  declare productName: string


  @Column({
    type: DataType.TEXT
  })
  declare productDescription: string

  @Column({
    type: DataType.INTEGER
  })
  declare productPrice: number

  @Column({
    type: DataType.INTEGER
  })
  declare productTotalStockQty: number

  @Column({
    type: DataType.STRING
  })
  declare productImageUrl: string

}

export default Product