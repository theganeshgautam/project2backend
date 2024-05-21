
import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  PrimaryKey
} from 'sequelize-typescript'

@Table({
  tableName: 'categories', //yo jaile plural
  modelName: 'Category', // yo jaile singular
  timestamps: true
})

class Category extends Model{
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
  declare categoryName: string

}

export default Category