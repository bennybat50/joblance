const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const admin = require("./routes/admin")
const company  = require("./routes/company")
const jobCategory  = require("./routes/job-category")
const job  = require("./routes/job")
const user = require("./routes/user")

const cors = require("cors");
const PORT = process.env.PORT || 7300;

const { default: mongoose } = require("mongoose")
require("dotenv").config()

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/", admin)
app.use("/", company)
app.use("/", jobCategory)
app.use("/", job)
app.use("/", user)

const URI = process.env.MONGO_URL;

mongoose.connect(URI, 
  { useNewUrlParser: true, 
    useUnifiedTopology: true, 
    family: 4 
  })
  .then(() => {
    console.log("Database Connected");
    // Your code here
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
  });

app.listen(PORT, ()=> {
    console.log(`Running on http://localhost:${PORT}`)
})    