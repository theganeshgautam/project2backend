
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
  tableName: 'users', //yo jaile plural
  modelName: 'User', // yo jaile singular
  timestamps: true
})

class User extends Model{
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4
  })
  declare id:string

  @Column({
    type: DataType.STRING
  })
  declare username: string

  @Column({
    type: DataType.ENUM('customer','admin'),
    defaultValue: 'customer'
  })
  declare role: string

  @Column({
    type: DataType.STRING
  })
  declare email: string

  @Column({
    type: DataType.STRING
  })
  declare password: string

}

export default User