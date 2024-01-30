const express = require("express")
const router = express.Router()
const Article = require("../models/article")
const User = require("../models/user")
const JobCategory = require("../models/job-category")
const handleError = require("../middlewares/error")

router.post("/create-article", async function (req, res){
    try{
        let {user_id, jobCategory_id} = req.body

        let user = await User.findById(user_id)
        let jobCategory = await JobCategory.findById(jobCategory_id)

        if(!user || !jobCategory){
            return handleError(res, 403, "User or interest does not exist")
        }

        let article = new Article(req.body)
        await article.save()
        res.status(200).send({message:"article created"})

    }catch(e){
        console.log(e)
        res.status(500).send(e.message)
    }
})

router.get("/article/user/:id", async function (req, res){
    try{

        let { id } = req.params 
        let article = await  Article.find({user_id: id })
        if(!article){
            return handleError(res, 404, "Article not found")
        }
        return res.status(200).send({
            message:"Your article",
            data: article 
        })
    }catch(e){
        return handleError(res, 500, "Internal server error ")
    }
})

router.get("/articles", async function (req, res){
    try{
        let article = await Article.find().populate("user_id jobCategory_id")
        if(!article){
            return handleError(res, 404, "Article not avalible ")
        }

        return res.status(200).send({
            message:"All articles",
            length:article.length,
            data: article
        })
    }catch(e){
        return handleError(res, 500, "Internal server error ")
    }
})


router.get("/articles/:id", async function (req, res){
    try{
        let { id } = req.params
        let article = await Article.findById(id).populate("user_id jobCategory_id")
        if(!article){
            return handleError(res, 404, "Article not avalible ")
        }

        return res.status(200).send({
            message:"Article",
            data: article
        })
    }catch(e){
        console.log(e)
        return handleError(res, 500, "Internal server error ")
    }
})

router.put("/article/update/:id", async function (req, res){
    try{
        let { id } = req.params

        let updateCategory = req.body

        let result = await Article.findByIdAndUpdate(id, updateCategory)

        if(!result){
            return handleError(res, 404, "article does not exist ")
        }

        
        return res.status(200).send({
            message: "article Updated",
            // data: result  
        })
    }catch(err){
        return handleError(res, 500, "Internal server error")
    }
})

router.delete("/article/delete/:id", async function (req, res){
    try{
        let { id } = req.params

        let article = await Article.findByIdAndDelete(id)

        if(!article){
            return handleError(res, 404, "article does not exist ")
        }

        return res.status(200).send({
            message: "article deleted successfully"
        })
    }catch(err){
        return handleError(res, 500, "Internal server error")
    }
})


module.exports = router 