const express = require("express")
const router = express.Router()
const User = require("../models/user")
require("dotenv").config();
const handleError =  require("../middlewares/error")
const jwt = require("jsonwebtoken")
const verifyToken = require("../middlewares/verifyToken")




router.post("/create-user", async function(req, res) {
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
        return res.status(403).send({ message: "User already exists" });
    }

    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).send(newUser);
    } catch (e) {
        console.log(e)
        res.status(500).send("Server error");
    }
});


router.get("/users", verifyToken, async function(req, res){
    try{
        let user = await User.find()
        res.status(200).send({
            message: "All users",
            length: user.length,
            data: user 
        })
    }catch(e){
        res.status(500).send(e.message)
    }
})


router.put("/user/update/:id", verifyToken, async function ( req, res){
    try{
        let { id } = req.params

        let updateUser = req.body

        let result = await User.findByIdAndUpdate(id, updateUser)

        if(!result){
            return res.status(404).send({
                message: "user does not exist"
            })
        }

        return res.status(200).send({
            message: "User Updated",
            data: result 
        })
        
    }catch(e){
        res.send(500).send(e.message )
    }
})


router.delete("/user/delete/:id", verifyToken,  async function(req, res){
    try{
        let { id } = req.params

        let deleteUser = await User.findByIdAndDelete(id)

        if (!deleteUser){
            return res.status(404).send({
                message: "user does not exist",
            })
        }

        return res.status(200).send({
            message: 'Admin deleted'
        })
    }catch(e){
        res.status(500).send(e.message)
    }
})

router.post("/user-login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password)
        return handleError(res, 400, "Email and password are required");

    try {
        const user = await User.findOne({ password });
        // console.log(admin.password)

        if (user && user.password === password) {
            const { password: adminPassword, ...noPasswordAdmin } = user.toObject();
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
        } else if (!user) {
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