import { DataTypes } from "sequelize";
import { sequelize } from "../../config/connection.js";

const UserModel = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
});

// Hooks
UserModel.beforeCreate((user, option) => {
  user.email = user.email.toLowerCase();
});

export default UserModel;
