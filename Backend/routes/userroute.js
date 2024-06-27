const express = require('express');
const { createUserController, editUserController, getUsersController, removeUserController } = require('../controllers/user');
const router = express.Router();

router.post("/create", createUserController);

router.put("/edit/:id", editUserController);

router.delete("/delete/:id", removeUserController);

router.get("/getusers", getUsersController);

module.exports = router;