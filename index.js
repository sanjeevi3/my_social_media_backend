const express = require("express");
const cors =require("cors");
const bodyParser=require("body-parser");
const app = express();
// use cors for avoid cors error
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.listen(3030, () => {
    console.log("Server is running on port 3030.");
  });