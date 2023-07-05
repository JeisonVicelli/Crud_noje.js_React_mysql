const express = require("express");
const { getUsers, addUser, deleteUser, upDateUser } = require("../controllers/user");
const router = express.Router();

router.get("/", (req, res) => {
  getUsers(req, res);
});

router.post("/", (req, res) => {
  addUser(req, res);
});

router.put("/:id", (req, res) => {
  upDateUser(req, res);
});

router.delete("/:id", (req, res) => {
  deleteUser(req, res);
});

module.exports = router;
