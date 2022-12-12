
require ('dotenv').config();

const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth.js");

const User = require("./models/user.js")

//MIDDLEWARE
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


// MOngoDB CONNECTION
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE,
{useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(()=> {
  console.log(" DB CONNECTED")
});


//ROUTES
app.use("/api",authRoutes);

//PORT
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});




