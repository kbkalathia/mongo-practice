import { DataTypes } from "sequelize";
import { sequelize } from "../../config/connection.js";

const UserModel = sequelize.define("User", {
  name: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    // unique: true,
    // allowNull: false,
    // validate: {
    //   isEmail: true,
    // },
  },
});

export default UserModel;
