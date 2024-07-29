// import mongoose from "mongoose";
// const url = "mongodb://localhost:27017/foodstock";

// async function connection() {
//   try {
//     await mongoose.connect(url);
//     console.log('MongoDB connected successfully');
//   } catch (error) {
//     console.log("Error connection");
//   }
// }

// ===============================  Postgres - Sequelize ===============================

import { Sequelize } from "sequelize";

const sequelize = new Sequelize("testDB", "postgres", "Sit@321#", {
  dialect: "postgres",
  host: "localhost",
  port: 5432,
});

async function connection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync({ force: false, logging: false, alter: true });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

export default connection;
export { sequelize };
