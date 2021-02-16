const express = require("express");

const taskController = require("../controllers/taskController");
const authController = require("../controllers/authController");

const router = express.Router();

router.use(authController.protect);

router.route("/").get(taskController.getAllTask);

router.route("/").post(taskController.createTask);

router
  .route("/:taskid")
  .patch(taskController.editTask)
  .delete(taskController.deleteTask);

module.exports = router;
