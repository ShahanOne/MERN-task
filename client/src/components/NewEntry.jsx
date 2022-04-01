import React, { useState } from "react";
import { ReactDOM } from "react";

function NewEntry() {

    const [id,setId] = React.useState("");
    const [name,setName] = React.useState("");
    const [email,setEmail] = React.useState("");
    const [phone,setPhone] = React.useState("");
    const [hobbies,setHobbies] = React.useState("");

    function handleIdChange(e){
        const {value} = e.target;
        setId(value)
    }

    function handleEmailChange(e){
        const {value} = e.target;
        setEmail(value)
    }

    function handleNameChange(e){
        const {value} = e.target;
        setName(value)
    }

    function handlePhoneChange(e){
        const {value} = e.target;
        setPhone(value)
    }

    function handleHobbiesChange(e){
        const {value} = e.target;
        setHobbies(value)
    }

    
    function handleSubmit(e){

        fetch("http://localhost:3001/api" , {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({id, name, email, phone, hobbies})
        }).then(()=>{
            console.log("added");
        })
        
        e.preventDefault();

    }


   return <div id="add" className="add-form pop-form">
   <br/>
   <h4 className="new-entry-heading pop-heading">Add Data</h4> <a className=" btn exit-btn" href="/"><img src="cross.png"/></a>
   <hr/>
   <center>
       <form onSubmit={handleSubmit} method="POST">
       <input className="form-control new-input" onChange={handleIdChange}      placeholder="Enter Unique Id" name="id"/>
       <br/>
       <input className="form-control new-input" onChange={handleNameChange}    placeholder="Enter Name" name="name"/>
       <br/>
       <input className="form-control new-input" onChange={handlePhoneChange}   placeholder="Enter Phone Number" name="phone" />
       <br/>
       <input className="form-control new-input" onChange={handleEmailChange}   placeholder="Enter E-mail Address" name="email" />
       <br/>
       <input className="form-control new-input" onChange={handleHobbiesChange} placeholder="Enter Hobbies" name="hobbies" />
       <br/>
       <button className="btn btn-primary reset-btn" type="reset">Reset</button>
       <button className="btn btn-primary submit-btn" type="submit">Add</button><a className=" btn btn-primary submit-btn" href="/">Go Back</a>
       <br/>
       <br/>
      
       </form>
       </center>
   </div> 
}

export default NewEntry;