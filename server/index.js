require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require('path');
const cors=require("cors");

app.use(express.json());

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));


const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration


mongoose.connect("mongodb+srv://Shahan786:"+process.env.MONGO_PASSWORD+"@cluster0.ma0c6.mongodb.net/formsDB");

const formSchema = new mongoose.Schema({
  id:{
    type: Number,
    required:[true, "Unique Id required!"],
    unique:[true,"Id has to be unique"],
    min: [1,"Please enter one to three digits"],
    max: [999,"Please enter one to three digits"]
  },
  name:{
    type: String,
    required:true
  },
    number: {
    type: Number,
    required:true
  },
    email: { 
    type: String,
    required: true,
    match: /.+\@.+\..+/,
    unique: true
  },
  hobbies:{
    type: String,
    required: true
  }
});

const Form =  mongoose.model("Form", formSchema);


app.get("/api", (req,res)=> {
  Form.find({}, function(err,foundForms){
    if (!err){
      res.send(foundForms)
    }
  })


})
app.post("/api", (req,res)=>{

 const id      = req.body.id;
 const name    = req.body.name;
 const email   = req.body.email;
 const phone   = req.body.phone;
 const hobbies = req.body.hobbies;

 const newForm = new Form({
  id: id,
  name: name,
  email: email,
  number:phone,
  hobbies: hobbies
})

newForm.save(function(err){
  if (err){
      console.log(err);
  } 
});

})

app.post("/delete", (req,res)=>{
  const id = req.body.id;

  Form.findOneAndDelete({id: id}, function(err,result){
    if (!err){
      console.log("Successfully Deleted");
    }
  });
})

app.post("/update", (req,res)=>{

  const id = req.body.id;
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const hobbies = req.body.hobbies;
 
const newForm ={"name": name, "email": email, "number":phone, "hobbies": hobbies}
 
 Form.findOneAndUpdate({"id": id},{$set:newForm}, function(err, book){
  if(err) {
      console.log(err);
      res.status(500).send(err);
  } else {
           res.status(200).send(book);
  }
});
})
let port = process.env.PORT;
if (port == null || port == "") {
  port =3001;
}

app.listen(port, function() {
  console.log("Server started on port 3001");
});
