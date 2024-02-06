const express = require("express")
const router = express.Router()
const Job = require("../models/job")
const User = require("../models/user")
const Apply = require("../models/apply")
const verifyToken = require("../middlewares/verifyToken")
const handleError = require("../middlewares/error")
const nodemailer = require("nodemailer");
const handlebars = require("handlebars")
const fs = require("fs")
const path = require("path")

// HIRED
router.post("/applicant/hire/", async function (req, res){
    try{
        // let { id } = req.params
        // let application = await Apply.findById(id)
        let {user_id, app_id} = req.body;
      
        let application = await Apply.findById({_id: app_id, user_id }).populate('job_id');
        let job = application.job_id
        let user = await User.findById(user_id)

        await job.populate('company_id')


        const companyName = job.company_id.companyName; 
        console.log(companyName)


        if (!application || !user) {
            return res.status(403).send({message: "bad request"})
        }

        let transporter = nodemailer.createTransport({
            host: "smtp.zeptomail.eu",
            port: 465,
            secure: true,
            auth: {
              user: process.env.EMAIL,
              pass: process.env.PASSWORD,
            },
          });
          const emailTemplateSource = fs.readFileSync(path.join(__dirname, "../views/hired-mail.hbs"), "utf8")
          const template = handlebars.compile(emailTemplateSource)
          const htmlToSend = template({
            name: user.fullName,
            jobTitle: job.jobTitle, 
            companyName: companyName,
          });         
          let mailOptions = {
            from: "team@dellegroup.com",
            to: user.email,
            subject: `Congratulations on Your New Job: ${job.jobType}`,
            html: htmlToSend
          };
          transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
              console.log(err);
            } else {
                console.log(`Email sent to ${user.email}: ${info.response}`);
            }
          });

          application.is_hired = true;
          await application.save();

          job.is_hired = true;
          await job.save(); 
          

          res.status(200).send({
            message: "Applicant successful hired ",
            // data: hiredApplication
        });
    }catch(e){
        console.log(e)
        handleError(res, 500, "Internal server error")
    }
})


// APPLY JOB
router.post("/apply", async function (req, res){
    // const existingApplication = await Apply.findOne({ user_id: req.body.user_id });

    // if (existingApplication) {
    //     return res.status(403).send({ message: "You've already applied" });
    // }

    try {
        let { job_id, user_id } = req.body

        let job = await Job.findById(job_id)
        let user = await User.findById(user_id)

        if (!job || !user) {
            return res.status(403).send({message: "bad request"})
        }
        
        let newApplication = new Apply(req.body);
        await newApplication.save();


        job.application_id.push(newApplication._id)
        await job.save()

        res.status(200).send({
            message: "Application successful",
            data: newApplication
        });
    } catch (e) {
        console.log(e)
            return handleError(res, 404, "Job ID and user ID required");
    }
})




router.get("/applications", async function (req, res){
    try{
        let application = await Apply.find().populate("user_id job_id company_id")
        if(!application){
            return handleError(res, 500, "No appliation")
        }

        return res.status(200).send({
            status: "Success",
            length: application.length,
            data: application 
        })
    }catch(err){
        return handleError(res, 500, "Internal server error")
    }
})
router.get("/applications/company/:id", async function (req, res){
    try{
        let application = await Apply.find({company_id:req.params.id}).populate("user_id job_id")
        if(!application){
            return handleError(res, 500, "No appliation")
        }

        return res.status(200).send({
            status: "Success",
            length: application.length,
            data: application 
        })
    }catch(err){
        return handleError(res, 500, "Internal server error")
    }
})

router.get("/applications", async function (req, res){
    try{
        let application = await Apply.find().populate("user_id job_id")
        if(!application){
            return handleError(res, 500, "No appliation")
        }

        return res.status(200).send({
            status: "Success",
            length: application.length,
            data: application 
        })
    }catch(err){
        return handleError(res, 500, "Internal server error")
    }
})

router.get("/applications/user/:id", async function (req, res){
    try{
        let application = await Apply.find({user_id:req.params.id}).populate("user_id job_id")
        if(!application){
            return handleError(res, 500, "No appliation")
        }

        return res.status(200).send({
            status: "Success",
            length: application.length,
            data: application 
        })
    }catch(err){
        return handleError(res, 500, "Internal server error")
    }
})

router.get("/applications/:id", async function (req, res){
    try{
        let { id } = req.params 
        let application = await Apply.findById(id).populate("user_id job_id")
        if(!application){
            return handleError(res, 500, "No appliation")
        }

        return res.status(200).send({
            status: "Success",
            length: application.length,
            data: application 
        })
    }catch(err){
        return handleError(res, 500, "Internal server error")
    }
})

router.delete("/application/delete/:id", async function(req, res){
    try{
        let { id } = req.params 

        let application = await Apply.findByIdAndDelete(id)

        if(!application){
            return handleError(res, 403, "Application does not exist")
        }

        return res.status(200).send({message: "Application deleted"})
    }catch(err){
        return handleError(res, 500, "Internal server error ")
    }
})

module.exports = router 