const express = require('express');
const router = express.Router();
const allControllers = require("../controllers/allControllers")


router.post("/authors", allControllers.createAuthor);

router.post("/blogs", allControllers.createBlog);

router.get("/getblogs", allControllers.getBlogs);

router.put("/updateBlogs/:blogId", allControllers.updateBlogs)

router.delete("/deleteBlogs/:blogId", allControllers.deleteBlogs)

router.delete("/deleteByAddress", allControllers.deleteByAddress);

module.exports = router;