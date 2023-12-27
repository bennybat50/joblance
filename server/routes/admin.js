const express = require("express")
const Admin = require("../models/admin")
const router = express.Router()
require("dotenv").config();
const handleError =  require("../middlewares/error")
// const Admin = require("../models/admin")
const jwt = require("jsonwebtoken")

router.post("/create-admin", async function(req, res) {
    const existingAdmin = await Admin.findOne({ email: req.body.email });

    if (existingAdmin) {
        return res.status(403).send({ message: "Admin already exists" });
    }

    try {
        const newAdmin = new Admin(req.body);
        await newAdmin.save();
        res.status(200).send(newAdmin);
    } catch (e) {
        res.status(500).send("Server error");
    }
});


router.get("/admins", async function(req, res){
    try{
        let admin = await Admin.find()
        res.status(200).send({
            message: "All Admin",
            length: admin.length,
            data: admin 
        })
    }catch(e){
        res.status(500).send(e.message)
    }
})


router.put("/admin/update/:id", async function ( req, res){
    try{
        let { id } = req.params

        let updateAdmin = req.body

        let result = await Admin.findByIdAndUpdate(id, updateAdmin)

        if(!result){
            return res.status(404).send({
                message: "admin does not exist"
            })
        }

        return res.status(200).send({
            message: "Admin Updated",
            data: result 
        })
        
    }catch(e){
        res.send(500).send(e.message )
    }
})


router.delete("/admin/delete/:id", async function(req, res){
    try{
        let { id } = req.params

        let deleteAdmin = await Admin.findByIdAndDelete(id)

        if (!deleteAdmin){
            return res.status(404).send({
                message: "Admin does not exist",
            })
        }

        return res.status(200).send({
            message: 'Admin deleted'
        })
    }catch(e){
        res.status(500).send(e.message)
    }
})

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password)
        return handleError(res, 400, "Email and password are required");

    try {
        const admin = await Admin.findOne({ password });
        // console.log(admin.password)

        if (admin && admin.password === password) {
            const { password: adminPassword, ...noPasswordAdmin } = admin.toObject();
            const token = jwt.sign(
                { noPasswordAdmin },
                process.env.NODE_APP_JWT_SECRET,
                {
                    expiresIn: "24h"
                }
            );

            res.status(200).send({
                status: "success",
                message: "Login successful",
                // data: noPasswordAdmin,
                token,
            });
        } else if (!admin) {
            res.status(404).send({
                status: "error",
                message: "Admin does not exist",
            });
        } else {
            res.status(400).send({
                status: "error",
                message: "Incorrect Password",
                data: {},
            });
        }
    } catch (err) {
        console.log(err);
        return handleError(res, 500, "Internal error occurred");
    }
});


module.exports = router 