const express = require('express');
const router = express.Router();
const allControllers = require("../controllers/allControllers")
const middleware = require("../middleware/auth")
const middlewares=require("../middleware/auth")

router.post("/authors", allControllers.createAuthor);

router.post("/blogs", allControllers.createBlog);

router.get("/getblogs", allControllers.getBlogs);

router.put("/updateBlogs/:blogId",middleware.auth1, allControllers.updateBlogs)

router.delete("/deleteBlogs/:blogId",middlewares.auth1, allControllers.deleteBlogs)

router.delete("/deleteByAddress", allControllers.deleteByAddress);

router.post("/login", allControllers.loginUser)

module.exports = router;