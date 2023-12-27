const express = require("express")
const Company = require("../models/company")
const verifyToken = require("../middlewares/verifyToken")
const handleError = require("../middlewares/error")
// const { verify } = require("jsonwebtoken")
const jwt = require("jsonwebtoken")

const router = express.Router()


// Create company 
router.post("/create-company", async function (req, res){
    let existingCompany = await Company.findOne({companyName: req.body.companyName})
    if(existingCompany){
        return handleError(res, 403, "Company already exist ")
    }

    try{
        let company = new Company(req.body)
        await company.save()
        res.status(200).send({message: "Company created"})

    }catch(e){
        res.status(500).send(e.message)
    }
})


// Login 
router.post("/company-login", async function(req, res){
    const { email, password} = req.body;

    if(!email || !password) 
        return handleError(res, 400, "Email and password are required")
    

    try{
        const company = await Company.findOne({password})

        if( company && company.password === password ){
            const { password: comapnyPassword, ...noPasswordCompany} = company.toObject()
            const token = jwt.sign(
                { noPasswordCompany },
                process.env.NODE_APP_JWT_SECRET,
                {
                    expiresIn: "24h"
                }
            );
            
            res.status(200).send({
                status:"Success",
                message: "Login Successful",
                token
            })
        }else if(!company){
            res.status(404).send({
                status: "error",
                message: "Company does not exist"
            })
        }else{
            res.status(400).send({
                Status: "Error",
                message:"Incorrect login details",
                data: {}
            })
        }

    }catch(err){
        console.log(err)
        return handleError(res, 500, "internal server error occurred ")
    }
})


// GET COMPANIES
router.get("/company", verifyToken, async function (req, res){
    try{
        let company = await Company.find().populate("job_id")
        if(!company){
            return res.status(404).send({message: "company does not exist"})
        }
        res.status(200).send({
            message: "companies",
            length: company.length,
            data: company
        })
    }catch(e){
        res.status(500).send(e.message)
    }
})


// GET SINGLE COMPANY 
router.get("/company/:id", verifyToken, async function (req, res){
    try{
        let { id } = req.params  
        let company = await Company.findById(id).populate("job_id")
        if(!company){
            return res.status(404).send({message: "company does not exist"})
        }
        res.status(200).send({
            message: "companies",
            length: company.length,
            data: company
        })
    }catch(e){
        res.status(500).send(e.message)
    }
})


// UPDATE COMPANY 
router.put("/company/update/:id", verifyToken, async function (req, res){
    try{
        let { id } = req.params
        
        let updateCompany = req.body;
        
        let result  = await Company.findByIdAndUpdate(id,updateCompany)

        if(!result){
            return handleError(res, 404, "Company does not exist ")
        }

        res.status(200).send({
            status: "Success",
            messsage: "Company details updated"
        })
    }catch(err){
        return handleError(res, 500, "Internal server error ")
    }
})


// DELETE 
router.delete("/company/delete/:id", verifyToken, async function (req, res){
    try{
        let { id } = req.params

        let company = await Company.findByIdAndDelete(id)

        if(!company){
            return handleError(res, 404, "Company does not exist ")
        }

        res.status(200).send({message: "Company deleted"})
    }catch(e){
        return handleError(res, 500, "Internal server error ")
    }
})



module.exports = router 