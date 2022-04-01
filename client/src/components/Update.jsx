import React, { useState } from "react";
import { ReactDOM } from "react";

function Update() {

    const [id,setId] = React.useState("")
    const [name,setName] = React.useState("")
    const [email,setEmail] = React.useState("")
    const [phone,setPhone] = React.useState("")
    const [hobbies,setHobbies] = React.useState("")

    function handleId(e){
        const {name,value} = e.target;
        setId(value)
    }
    function handleNameUpdate(e){
        const {name,value} = e.target;
        setName(value)
    }
    function handlePhoneUpdate(e){
        const {name,value} = e.target;
        setPhone(value)
    }
    function handleEmailUpdate(e){
        const {name,value} = e.target;
        setEmail(value)
    }
    function handleHobbiesUpdate(e){
        const {name,value} = e.target;
        setHobbies(value)
    }
    function handleSubmit(e){

        fetch("http://localhost:3001/update" , {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({id,name, email, phone, hobbies})
        }).then(()=>{
            console.log("added");
        })
        e.preventDefault();

    }


   return <div id="update" className="update-form pop-form">
       <br/>
   <h4 className="update-heading pop-heading">Update Data</h4> <a className=" btn exit-btn" href="/"><img src="cross.png"/></a>
   <hr/>
   <form onSubmit={handleSubmit} method="POST" >
       <input className="form-control new-input" onChange={handleId} placeholder="Unique ID" name="id"/>
       <br/>
       <input className="form-control new-input" onChange={handleNameUpdate} placeholder="Enter Name" name="name"/>
       <br/>
       <input className="form-control new-input" onChange={handlePhoneUpdate} placeholder="Enter Phone Number" name="phone" />
       <br/>
       <input className="form-control new-input" onChange={handleEmailUpdate} placeholder="Enter E-mail Address" name="email" />
       <br/>
       <input className="form-control new-input" onChange={handleHobbiesUpdate} placeholder="Enter Hobbies" name="hobbies" />
       <br/>
       <button type="submit" className="btn btn-success">Update</button><a className=" btn btn-primary submit-btn" href="/">Go Back</a>
       <br/>
       <br/>
   </form>
   </div> 
}

export default Update;