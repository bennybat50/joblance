const express = require("express")
const router = express.Router()
const Category = require("../models/job-category")
const verifyToken  = require("../middlewares/verifyToken")
const handleError  = require("../middlewares/error")
const jwt = require("jsonwebtoken")

router.post("/job-category", verifyToken, async function (req, res){
    let existingCategory = await Category.findOne({name: req.body.name})

    if(existingCategory){
        return handleError(res, 403, "Job category already exist")
    }

    try{
        let category = new Category(req.body)
        await category.save()
        res.status(200).send({message: "Job category created"})
    }catch(err){
        return handleError(res, 500, "Ïnternal server error")
    }
})


router.get("/job-categories", verifyToken, async function (req, res){
    try{
        let jobCategory = await Category.find().populate("job_id application_id")

        if(!jobCategory){
            return handleError(res, 404, "No job category")
        }

        res.status(200).send({
            Status: "Success",
            messsage: "All job categories",
            length: jobCategory.length,
            data: jobCategory
        })

    }catch(err){
        return handleError(res, 500, "Internal server error")
    }
})

router.get("/job-category/:id", verifyToken, async function (req, res){
    try{
        let { id } = req.params;

        let category = await Category.findById(id)

        if(!category){
            return handleError(res, 404, "Category does not exist")
        }

        res.status(200).send({
            status: "Success",
            length: category.length,
            data: category
        })
    }catch(err){
        return handleError(res, 500, "Internal server error")
    }
})

router.put("/job-category/update/:id", verifyToken, async function (req, res){
    try{
        let { id } = req.params

        let updateCategory = req.body

        let result = await Category.findByIdAndUpdate(id, updateCategory)

        if(!result){
            return handleError(res, 404, "Category does not exist ")
        }

        
        return res.status(200).send({
            message: "Category Updated",
            // data: result  
        })
    }catch(err){
        return handleError(res, 500, "Internal server error")
    }
})

router.delete("/job-category/delete/:id", verifyToken, async function (req, res){
    try{
        let { id } = req.params

        let category = await Category.findByIdAndDelete(id)

        if(!category){
            return handleError(res, 500, "Category does not exist ")
        }

        return res.status(200).send({
            message: "Category deleted successfully"
        })
    }catch(err){
        return handleError(res, 500, "Internal server error")
    }
})

module.exports = router 