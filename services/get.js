import mongoose from "mongoose";
import InformationModel from "../models/information.model.js";

const InsertData = async (req, res) => {
  try {
    const ress = new InformationModel(req.body);
    await ress.save();
    return res.status(201).json({ success: true, doc: ress._doc });
  } catch (error) {
    console.log("error :>> ", error);
  }
};

const GetData = async (req, res) => {
  try {
    const ress = await InformationModel.findOne({
      _id: new mongoose.Types.ObjectId(`${req.query.state}`),
    })
      .populate("userId")
      // .populate({ path: "userId", select: ["name"] })
      .exec();
    return res.status(200).json(ress);
  } catch (error) {
    console.log("error :>> ", error);
  }
};

const UpdateData = async (req, res) => {
  try {
    const stateName = req.params.stateName;
    const { state } = req.body;

    const ress = await InformationModel.updateMany(
      {
        state: stateName,
      },
      {
        state,
      }
    );
    return res.status(200).json(ress);
  } catch (error) {
    console.log("error :>> ", error);
  }
};

const DeleteData = async (req, res) => {
  try {
    const cityName = req.params.cityName;
    console.log("cityName :>> ", cityName);

    const ress = await InformationModel.deleteOne({
      city: cityName,
    });
    return res.status(200).json(ress);
  } catch (error) {
    console.log("error :>> ", error);
  }
};

const GetDataUsingAggregation = async (req, res) => {
  try {
    const ress = await InformationModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(`${req.query.state}`),
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "userDetails",
          pipeline: [
            {
              $project: {
                _id: 0,
                name: 1,
                email: 1,
              },
            },
          ],
        },
      },
      {
        $unwind: {
          path: "$userDetails",
        },
      },
      {
        $limit: 10,
      },
      {
        $sort: {
          city: -1,
        },
      },
    ]);

    return res.status(200).json(ress);
  } catch (error) {
    console.log("error :>> ", error);
  }
};

export default GetData;
export { InsertData, UpdateData, DeleteData, GetDataUsingAggregation };
