import { DataTypes } from "sequelize";
import { sequelize } from "../../config/connection.js";
import UserModel from "./users.model.js";
import ContactsModel from "./contacts.model.js";

const UserContactModel = sequelize.define("UserContacts", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    references: {
      key: "id",
      model: UserModel,
    },
    onDelete: "CASCADE",
  },
  contactId: {
    type: DataTypes.UUID,
    references: {
      key: "id",
      model: ContactsModel,
    },
    onDelete: "CASCADE",
  },
});

export default UserContactModel;
