const express = require("express");
const routes = require(".");
const controller =require("../controller/post");
const validation = require("../validation/post")
const router = express.Router();

router.post("/",validation.addPost,controller.addPost);
router.delete("/:postId",controller.deletePost);
router.put("/",validation.updatePost,controller.updatePost);
router.get("/",controller.getPosts);
router.get("/:authorId",controller.getPosts);
module.exports = router;