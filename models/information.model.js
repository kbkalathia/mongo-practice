import mongoose from "mongoose";

const InformationSchema = new mongoose.Schema(
  {
    city: {
      type: String,
      require: true,
    },
    pop: {
      type: Number,
      require: true,
    },
    state: {
      type: String,
      require: true,
    },
    loc: {
      type: [Number],
      default: [],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

const InformationModel = mongoose.model("informations", InformationSchema);

export default InformationModel;
