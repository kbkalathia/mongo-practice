import express from "express";
import GetData, {
  DeleteData,
  InsertData,
  UpdateData,
  GetDataUsingAggregation,
} from "../services/get.js";
import * as UsersController from "../services/PostgreSQL/users.controller.js";

var router = express.Router();

/* GET home page. */
router.get("/", GetDataUsingAggregation);
router.post("/", InsertData);
router.put("/:stateName", UpdateData);
router.delete("/:cityName", DeleteData);

/* Postgres Users */
router.get("/pg/get-users", UsersController.GetUsers);
router.post("/pg/add-user", UsersController.AddUser);
router.patch("/pg/update-user/:id", UsersController.UpdateUser);
router.delete("/pg/delete-user/:id", UsersController.DeleteUser);

export default router;
