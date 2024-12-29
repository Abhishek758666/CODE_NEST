import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "tasks",
  modelName: "Task",
  timestamps: true,
})
class Task extends Model {
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

  @Column({
    type: DataType.STRING,
  })
  declare code: string;

  @Column({
    type: DataType.STRING,
  })
  declare language: string;
}

export default Task;
