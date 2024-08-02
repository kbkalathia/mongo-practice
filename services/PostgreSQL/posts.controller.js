import { Op } from "sequelize";
import { sequelize } from "../../config/connection.js";
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
    ResponseHelper.ServerFailure(res);
  }
};

export const GetUsersTotalPosts = async (req, res) => {
  try {
    const result = await PostModel.findAll({
      attributes: [
        "userId",
        [sequelize.fn("COUNT", sequelize.col("id")), "totalPosts"],
      ],
      group: ["userId"],
      // having: sequelize.where(sequelize.fn("COUNT", sequelize.col("userId")), {
      //   [Op.gt]: 5,
      // }),
      order: [["totalPosts", "DESC"]],
      // limit: 2,
      // offset: 1,
    });

    ResponseHelper.Success(res, result);
  } catch (error) {
    console.log("error :>> ", error);
    ResponseHelper.ServerFailure(res);
  }
};
