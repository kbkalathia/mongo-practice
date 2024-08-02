import { Op } from "sequelize";
import UserModel from "../../models/PostgreSQL/users.model.js";
import PostModel from "../../models/PostgreSQL/posts.model.js";
import * as ResponseHelper from "../../utils/response.helpers.js";
import ContactsModel from "../../models/PostgreSQL/contacts.model.js";
import { sequelize } from "../../config/connection.js";

export const GetUsers = async (req, res) => {
  try {
    // const result = await UserModel.findAll({});
    const result = await UserModel.findAndCountAll({});
    ResponseHelper.Success(res, result);
  } catch (error) {
    ResponseHelper.ServerFailure(res);
  }
};

export const GetUser = async (req, res) => {
  try {
    // const result = await UserModel.findAll({
    //   where: {
    //     id: {
    //       [Op.eq]: req.params.id,
    //     },
    //   },
    // });

    const result = {};
    const [user, created] = await UserModel.findOrCreate({
      where: {
        email: req.body.email,
      },
      defaults: {
        name: req.body.name,
      },
    });
    if (created) {
      result.isCreated = created;
      result.data = user;
    }

    ResponseHelper.Success(res, result);
  } catch (error) {
    ResponseHelper.ServerFailure(res);
  }
};

export const AddUser = async (req, res) => {
  try {
    const result = await UserModel.create(req.body);
    ResponseHelper.Created(res, result);
  } catch (error) {
    console.log("error :>> ", error);
    ResponseHelper.ServerFailure(res);
  }
};

export const UpdateUser = async (req, res) => {
  try {
    const result = await UserModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    ResponseHelper.Success(res, result);
  } catch (error) {
    ResponseHelper.ServerFailure(res);
  }
};

export const DeleteUser = async (req, res) => {
  try {
    const result = await UserModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    ResponseHelper.Success(res, result);
  } catch (error) {
    ResponseHelper.ServerFailure(res);
  }
};

export const CountUsers = async (req, res) => {
  try {
    const result = await UserModel.count();
    ResponseHelper.Success(res, result);
  } catch (error) {
    ResponseHelper.ServerFailure(res);
  }
};

export const GetAllPostsForUsers = async (req, res) => {
  try {
    const result = await UserModel.findOne({
      where: { id: req.params.id },
      include: [
        {
          as: "posts",
          model: PostModel,
        },
      ],
    });
    ResponseHelper.Success(res, result);
  } catch (error) {
    ResponseHelper.ServerFailure(res);
  }
};

export const GetUserContacts = async (req, res) => {
  try {
    const result = await UserModel.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["id", "name", "email"],
      include: [
        {
          as: "contacts",
          model: ContactsModel,
          attributes: ["id", "number"],
          through: {
            attributes: [],
          },
        },
      ],
    });

    ResponseHelper.Success(res, result);
  } catch (error) {
    ResponseHelper.ServerFailure(res);
  }
};

export const TotalUsers = async (req, res) => {
  try {
    const result = await UserModel.findAll({
      attributes: [[sequelize.fn("COUNT", sequelize.col("id")), "counts"]],
    });

    ResponseHelper.Success(res, result);
  } catch (error) {
    ResponseHelper.ServerFailure(res);
  }
};
