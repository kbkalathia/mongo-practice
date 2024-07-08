import express from "express";
var router = express.Router();

/* GET home page. */
router.get("/", GetData);
router.post("/", InsertData);
router.put("/:stateName", UpdateData);
router.delete("/:cityName", DeleteData);

export default router;