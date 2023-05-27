const express = require("express");
const router = express.Router();
const { list, detail} = require("../controllers/userController");

router
    .get("/", list)
    .get("/:id", detail)

module.exports = router;