// const { default: mongoose } = require("mongoose").Types.ObjectId;
const jwt = require("jsonwebtoken");
const authorModel = require("../models/authorModel")
const blogsModel = require("../models/blogsModel");

//part1
const createAuthor = async function (req, res) {
    try {
        let data = req.body;
        let savedata = await authorModel.create(data);
        res.status(201).send({ status: true, msg: savedata })
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}

//part2
const createBlog = async function (req, res) {
    try {
        let data = req.body;
        let data1 = req.body.authorId;
        let savedata = await authorModel.findById(data1);
        if (!savedata) {
            res.status(400).send({ status: false, msg: 'No such authorId is Present' });
        }
        let savedata1 = await blogsModel.create(data)
        res.status(201).send({ status: true, msg: savedata1 })
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}


//part3
const getBlogs = async function (req, res)
{
    try 
    {
        const toFind = req.query

        const collection = await blogsModel.find({$and : [toFind, {isPublished:true}]})//(toFind)
        if (collection.length==0) 
        {
            res.status(400).send({ status: false, msg: "Not Found" })
        }
        console.log(collection)
        res.status(201).send({ status: true, message: collection })
    }
    catch (err) 
    {
        res.status(500).send({ status: false, msg: err.message })
    }
}



//part4
// 
const updateBlogs = async function (req, res) {
    try {
        let blogId= req.params.blogId;

        if (Object.keys(blogId).length == 0) {
            res.status(400).send({ status: false, msg: "BlogsId Required" })
        }
        let findBlogId = await blogsModel.findById(blogId)
        if (!findBlogId) {
            res.status(404).send({ status: false, msg: 'blog not found' })
        }
        else {
            let data = req.body;
            let savedata = await blogsModel.findOneAndUpdate({ _id: blogId }, { $set: data }, { new: true })
            // console.log(savedata)
            savedata.isPublished = true
            savedata.publishedAt = Date()
            savedata.save()
            res.status(200).send({ status: true, msg: savedata })
        }
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}

//part5



const deleteBlogs = async function (req, res) {
    try {
        let blogId = req.params.blogId
        if (Object.keys(blogId).length == 0) {
            res.status(400).send({ status: false, msg: "BlogsId Required" })
        }
        let blogDetails = await blogsModel.find({ _id: blogId }, { isDeleted: false })
        if (!blogDetails) {
            res.status(404).send({ status: false, msg: "Blogs Not Found" })
        } else {

            let deleteData = await blogsModel.findOneAndUpdate({ _id: blogId }, { isDeleted: true }, { new: true })
            deleteData.deletedAt = Date()
            deleteData.save()
            res.status(201).send({ status: true, data: deleteData })

        }
    }
    catch (error) {
        console.log(error)
        res.status(500).send({ msg: error.message })
    }


}
//part6
const deleteByAddress = async function (req, res) {
    try {
        let authorId = req.query.authorId
        let category = req.query.category
        if (!authorId) {
            res.status(400).send({ status: false, msg: "AuthorId Required" })
        }
        if (!category) {
            res.status(400).send({ status: false, msg: "Category Required" })
        }
        let authorDetails = await authorModel.find({ _id: authorId })
        if (!authorDetails) {
            res.status(404).send({ status: false, msg: "AuthorId Not Exist" })
        } else {
            let updateDetails = await blogsModel.updateMany({ authorId: authorId, category: category }, { $set: { isDeleted: true } })
            updateDetails.deletedAt = Date()
            res.status(201).send({ status: true, data: updateDetails })

        }
    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: error.message })
    }
}
//Phase_2
//part-7
const loginUser = async function (req, res) {
    try{
    let userName = req.body.emailId;
    let password = req.body.password;
    let author= await authorModel.findOne({ emailId: userName, password: password });
    if (!author)
      return res.send({
        status: false,
        msg: "username or the password is not corerct",
      });
      let token = jwt.sign({ authorId: author._id.toString() }, "Blog");

      res.status(201).send({ status: true, msg: "Succesfully LogedIn.Here is a access Token", token: token })
    }
    
    catch(error){
        console.log(error)
        res.status(500).send({ msg: error.message })
    }
  }

module.exports.createAuthor = createAuthor;

module.exports.createBlog = createBlog;

module.exports.getBlogs = getBlogs;

module.exports.updateBlogs = updateBlogs;

module.exports.deleteBlogs = deleteBlogs;

module.exports.deleteByAddress=deleteByAddress;

module.exports.loginUser=loginUser;
