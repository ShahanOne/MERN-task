import React from "react";
import { ReactDOM } from "react";
import TableData from "./TableData";

function Table() {

  const [data,setData] = React.useState(null);
  const [isCheck, setCheck] = React.useState(false);

  React.useEffect(()=>{
    fetch("/api")
    .then((res)=> res.json())
    .then((data)=> setData(data));
    
    },[]);

    function handleCheck(){
      !isCheck? setCheck(true) : setCheck(false)

    }

    return <div className="table-div">
    
            <table className="table table-hover">
      <thead>
    <tr>
      <th scope="col"><input type="checkbox" onClick={handleCheck}/></th>
      <th scope="col">Sr. No.</th>
      <th scope="col">Unique Id</th>
      <th scope="col">Name</th>
      <th scope="col">Phone No.</th>
      <th scope="col">Email</th>
      <th scope="col">Hobby</th>
    </tr>
  </thead>
  <tbody>
    {data? data.map((newData,index)=> <TableData checked={isCheck} serial={index} id={newData.id} name={newData.name} number={newData.number} email={newData.email} hobbies={newData.hobbies}/>)
     : "Loading" }
  </tbody>
      </table>  
      
      <form style={{"visibility":"hidden"}} action="mailto:shahanhussain9105@gmail.com" method="post" encType="text/plain">
      <center><button  type="submit" className="btn btn-primary btn-send">Send</button></center>
      {data && data.map(formData=> <input type="text" name="id" value={formData.id}/> )}
      {data && data.map(formData=> <input type="text" name="name" value={formData.name}/>)}
      {data && data.map(formData=> <input type="text" name="phone" value={formData.number}/>)}
      {data && data.map(formData=> <input type="text" name="email" value={formData.email}/>)}
      {data && data.map(formData=> <input type="text" name="hobbies" value={formData.hobbies}/>)}
     
       </form>
       
       
       
    </div> 
 }
 
 export default Table;
