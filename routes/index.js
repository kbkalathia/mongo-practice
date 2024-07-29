import express from "express";
import GetData, {
  DeleteData,
  InsertData,
  UpdateData,
  GetDataUsingAggregation,
} from "../services/get.js";
import * as UsersController from "../services/PostgreSQL/users.controller.js";
import * as PostsController from "../services/PostgreSQL/posts.controller.js";
import * as ContactsController from "../services/PostgreSQL/contacts.controller.js";

var router = express.Router();

/* GET home page. */
router.get("/", GetDataUsingAggregation);
router.post("/", InsertData);
router.put("/:stateName", UpdateData);
router.delete("/:cityName", DeleteData);

/* Postgres Users */
router.get("/pg/get-users", UsersController.GetUsers);
router.get("/pg/get-user/:id", UsersController.GetUser);
router.get("/pg/get-user-all-posts/:id", UsersController.GetAllPostsForUsers);
router.post("/pg/add-user", UsersController.AddUser);
router.patch("/pg/update-user/:id", UsersController.UpdateUser);
router.delete("/pg/delete-user/:id", UsersController.DeleteUser);

router.get("/pg/get-user-contacts/:id", UsersController.GetUserContacts);


router.post("/pg/add-post", PostsController.AddPost);
router.get("/pg/get-post/:id", PostsController.GetPostData);

router.post("/pg/add-contact", ContactsController.AddContact);
router.post('/pg/remove-contact', ContactsController.RemoveContact);

router.post('/pg/link-contact', ContactsController.LinkContact);

export default router;
