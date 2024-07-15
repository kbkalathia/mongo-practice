import UserModel from "../../models/PostgreSQL/users.model.js";

export const GetUsers = async (req, res) => {
  try {
    const result = await UserModel.findAll();
    res.status(200).json({ status: 200, data: result });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

export const AddUser = async (req, res) => {
  try {
    const result = await UserModel.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

export const UpdateUser = async (req, res) => {
  try {
    const result = await UserModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

export const DeleteUser = async (req, res) => {
  try {
    const result = await UserModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

export const CountUsers = async (req, res) => {
  try {
    const result = await UserModel.count();
    res.status(200).json({ status: 200, count: result });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};
