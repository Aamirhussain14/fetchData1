import React from "react";
import { Table } from "react-bootstrap";

function DisplayTable(props) {

    const deleteData=(id)=>{
      const copyData=[...props.data]
      copyData.splice(id,1)
      props.updatedData(copyData)
    }

    console.log('data1',props);
  return (
    <div>
      <Table striped bordered hover variant="dark" size="sm">
        <thead >
          <tr>
            <th>ID</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
       { props.data.filter((val,index)=>{
           if(props.searchData===""){
               return val
           }
           else if(val.body.toLowerCase().includes((props.searchData))){
               return val
           }
           else if(val.id===parseInt(props.searchData)){
                return val
           }else if(val.body.length>4){
             return val
           }
       })
       .map((val,index)=>{
        return <tr key={index}>
             <td>{val.id}</td>
             <td>{val.body}</td>
            <td><button onClick={()=>{deleteData(index)}}>Delete</button></td>

         </tr>
        })}
        </tbody>
      </Table>
    </div>
  );
}

export default DisplayTable;

