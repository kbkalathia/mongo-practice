import { UserPostAssociation } from "../../models/PostgreSQL/associations.js";
import PostModel from "../../models/PostgreSQL/posts.model.js";
import UserModel from "../../models/PostgreSQL/users.model.js";
import * as ResponseHelper from "../../utils/response.helpers.js";

UserPostAssociation();

export const AddPost = async (req, res) => {
  try {
    const result = await PostModel.create(req.body);
    ResponseHelper.Created(res, result);
  } catch (error) {
    ResponseHelper.ServerFailure(res);
  }
};

export const GetPostData = async (req, res) => {
  try {
    const result = await PostModel.findOne({
      where: { id: req.params.id },
      include: [
        {
          as: "userDeatils",
          model: UserModel,
        },
      ],
    });
    ResponseHelper.Success(res, result);
  } catch (error) {
    console.log("error :>> ", error);
    ResponseHelper.ServerFailure(res);
  }
};
