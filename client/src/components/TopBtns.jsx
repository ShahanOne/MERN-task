import React from "react";
import { ReactDOM } from "react";
import NewEntry from "./NewEntry";
import Delete from "./Delete";
import Update from "./Update";

function TopBtns(props) {

    const [isClicked,setClick] = React.useState(false)


   return  <div className="top-btns container-fluid row" >
    <div className="col-lg-4">
    <center><a className="btn btn-primary " href="#add"> ADD</a></center>
    </div>

    <div className="col-lg-4">
    <center><a className="btn btn-primary " href="#delete"> DELETE</a></center>
    </div>

    <div className="col-lg-4">
    <center><a className="btn btn-primary" href="#update"> UPDATE</a></center>
    </div>
   <center><NewEntry/></center> 
   <center><Delete/></center>
   <center><Update/></center>
    </div>  
    
}

export default TopBtns;