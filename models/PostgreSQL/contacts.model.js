import { DataTypes } from "sequelize";
import { sequelize } from "../../config/connection.js";

const ContactsModel = sequelize.define("Contacts", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  number: {
    type: DataTypes.BIGINT,
    allowNull: false,
    validate: {
      isNumeric: true,
      len: {
        args: [10, 10], // min = 10 , max = 10
        msg: "Number must be of 10 digits",
      },
    },
  },
});

export default ContactsModel;
