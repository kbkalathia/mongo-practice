import UserModel from "./users.model.js";
import PostModel from "./posts.model.js";

export function UserPostAssociation() {
  UserModel.hasMany(PostModel, { as: "posts", foreignKey: "userId" });
  PostModel.belongsTo(UserModel, { as: "userDeatils", foreignKey: "userId" });
}
