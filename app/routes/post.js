const express = require("express")
const controller =require("../controller/post");
const validation = require("../validation/post")
const router = express.Router();

router.post("/",validation.addPost,controller.addPost);

module.exports = router;