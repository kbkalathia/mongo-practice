import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipcode: { type: String, required: true },
  },
  interests: { type: [String], default: [] },
  registered: { type: Boolean, default: true },
  account_balance: { type: Number, default: 0 },
  last_login: { type: Date },
  phone: { type: String },
});

const UsersModel = mongoose.model("users", UsersSchema);

export default UsersModel;
