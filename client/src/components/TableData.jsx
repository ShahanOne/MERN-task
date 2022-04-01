import React from "react";
import { ReactDOM } from "react";

function TableData(props) {
   return <tr>
   <th scope="row"><input type="checkbox" checked={props.checked}/></th>
   <td>{props.serial}</td>
   <td>{props.id}</td>
   <td>{props.name}</td>
   <td>{props.number}</td>
   <td>{props.email}</td>
   <td>{props.hobbies}</td>
 </tr>
}

export default TableData;