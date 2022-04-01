import React, { useState } from "react";
import { ReactDOM } from "react";
 
function Delete() {

    const [id,setId] = React.useState("")

    function handleSubmit(e){

        fetch("http://localhost:3001/delete" , {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({id})
        }).then(()=>{
            console.log("deleted");
        })
        e.preventDefault();

    }

    function handleChange(e){
        const {name,value} = e.target;
        setId(value)
    }

   return <div id="delete" className="delete-form pop-form">
       <br/>
   <h4 className="delete-heading pop-heading">Delete Data</h4> <a className=" btn exit-btn" href="/"><img src="cross.png"/></a>
   <hr/>
   <form onSubmit={handleSubmit} method="POST" >
       <input className="form-control new-input" onChange={handleChange} placeholder="Unique ID" name="id"/>
       <br/>
       <button type="submit" className="btn btn-danger submit-btn">Delete</button><a className=" btn btn-primary submit-btn" href="/">Go Back</a>
       <br/>
       <br/>
   </form>
   </div> 
}

export default Delete;