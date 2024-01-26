const express = require("express")
const router = express.Router()
const User = require("../models/user")
require("dotenv").config();
const handleError =  require("../middlewares/error")
const jwt = require("jsonwebtoken")
const nodemailer = require("nodemailer");
const handlebars = require("handlebars")
const fs = require("fs")
const path = require("path")
const verifyToken = require("../middlewares/verifyToken");
const companyModel = require("../models/company");




router.post("/create-user", async function(req, res) {
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
        return res.status(200).send({ message: "User already exists" });
    }

    try {
        
        const newUser = new User(req.body);
        await newUser.save();
        const { password: adminPassword, ...noPasswordAdmin } = newUser.toObject();
            const token = jwt.sign(
                { noPasswordAdmin },
                process.env.NODE_APP_JWT_SECRET,
                {
                    expiresIn: "24h"
                }
            );
           if(req.body.role=="company"){
            const newCompany=new companyModel({user_id:newUser._id, email:newUser.email, })
            await newCompany.save();
           }
    

            //SEND MAIL
            let transporter = nodemailer.createTransport({
                host: "smtp.zeptomail.eu",
                port: 465,
                secure: true,
                auth: {
                  user: process.env.EMAIL,
                  pass: process.env.PASSWORD,
                },
              });
              const emailTemplateSource = fs.readFileSync(path.join(__dirname, "../views/register-mail.hbs"), "utf8")
              const template = handlebars.compile(emailTemplateSource)
              const htmlToSend = template({ name: req.body.fullName })
              let mailOptions = {
                from: "team@dellegroup.com",
                to: req.body.email,
                subject: `Welcome to Joblance – Your Gateway to Exciting Career Opportunities!`,
                html: htmlToSend
              };
              transporter.sendMail(mailOptions, function (err, res) {
                if (err) {
                  console.log(err);
                } else {
                  console.log(`(${index}) Email sent to ${req.body.email}`);
                }
              });

        res.status(200).send({newUser, token});
    } catch (e) {
        console.log(e)
        res.status(500).send({message:"Server error"});
    }
});


router.get("/users", async function(req, res){
    try{
        let user = await User.find().populate("message_id")
        res.status(200).send({
            message: "All users",
            length: user.length,
            data: user 
        })
    }catch(e){
        res.status(500).send({message:e.message})
    }
})

router.get("/user/:id", async function(req, res){
    try{
        let { id } = req.params
        let user = await User.findById(id).populate("message_id")

        if(!user){
            return handleError(res, 404, "No user")
        }
        return  res.status(200).send({
            message: "user",
            length: user.length,
            data: user 
        })
    }catch(e){
        console.log(e)
        res.status(500).send(e.message)
    }
})



router.put("/user/update/:id", async function ( req, res){
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


router.delete("/user/delete/:id",  async function(req, res){
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
        const user = await User.findOne({ email,password });
        // console.log(admin.password)

        if (user && user.email === email && user.password === password) {
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
                data: user,
                token,
            });
        } else if (!user) {
            res.status(200).send({
                status: "error",
                message: "User does not exist",
            });
        } else {
            res.status(200).send({
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