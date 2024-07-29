import UserModel from "./users.model.js";
import PostModel from "./posts.model.js";
import ContactsModels from "./contacts.model.js";

export function UserPostAssociation() {
  UserModel.hasMany(PostModel, { as: "posts", foreignKey: "userId" });
  PostModel.belongsTo(UserModel, { as: "userDeatils", foreignKey: "userId" });
}

export function UserContactAssociation() {
  UserModel.belongsToMany(ContactsModels, {
    as: "contacts",
    foreignKey: "userId",
    through: "UserContacts",
  });
  ContactsModels.belongsToMany(UserModel, {
    as: "userDetails",
    foreignKey: "contactId",
    through: "UserContacts",
  });
}
 