import express from "express";
import GetData, { DeleteData, InsertData, UpdateData } from "../services/get.js";
var router = express.Router();

/* GET home page. */
router.get("/", GetData);
router.post("/", InsertData);
router.put("/:stateName", UpdateData);
router.delete("/:cityName", DeleteData);

export default router;
