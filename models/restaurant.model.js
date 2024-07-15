import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema(
  {
    address: {
      building: { type: String, required: true },
      coord: { type: [Number], required: true },
      street: { type: String, required: true },
      zipcode: { type: String, required: true },
    },
    borough: { type: String, required: true },
    cuisine: { type: String, required: true },
    grades: [
      {
        date: { type: Date, required: true },
        grade: { type: String, required: true },
        score: { type: Number, required: true },
      },
    ],
    name: { type: String, required: true },
    restaurant_id: { type: String, required: true },
  },
  { timestamps: true }
);

const RestaurantModel = mongoose.model("restaurants", RestaurantSchema);

export default RestaurantModel;
