import { DataTypes } from "sequelize";
import { sequelize } from "../../config/connection.js";
import UserModel from "./users.model.js";

const PostModel = sequelize.define("Post", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: DataTypes.STRING,
  description: {
    type: DataTypes.STRING,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      key: "id",
      model: UserModel,
    },
  },
});

export default PostModel;
