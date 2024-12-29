import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "categories",
  modelName: "Category",
  timestamps: true,
})
class Category extends Model {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  declare id: string;

  @Column({
    type: DataType.STRING,
  })
  declare title: string;
}

export default Category;
