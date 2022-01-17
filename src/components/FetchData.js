import axios from 'axios';
import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import DisplayTable from './DisplayTable';
import setInLocal from './localStorage';

function FetchData() {
    const [data, setdata] = useState(setInLocal);

    const [searchData, setsearchData] = useState([])

    const fetchData=async ()=>{
        try {
            const getData=await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log(getData);
            const myData=getData.data;
            setdata(myData);
            console.log(myData);
            localStorage.setItem('jsonData',JSON.stringify(myData))
        } catch (err) {
            alert(err);
        }
    }

    const updatedData=(copyData)=>{
        setdata(copyData)
    }
    console.log(data);
    const clearData = ()=>{
        localStorage.clear("jsonData")
        window.location.reload()
    }
   /*  
    const searchText=(event)=>{
        setsearchData({
            ...searchData,
            [event.target.name]:event.target.vlaue
        })

    } */
    return (
        <div>
            <button onClick={fetchData}>Get Data</button>{" "}
            <button onClick={clearData}>Clear Data</button>

            <div>
            <form>
        <Form.Group className="mb-3" controlId="formBasicEmail"  />
        <Form.Control  
        type="text"
        placeholder="enter text"  
        name="text"
        value={searchData.text} 
        onChange={e=>{setsearchData(e.target.value)}}/>
        
      </form>
            </div>

    <div>
                {/* {data.map((value,index)=>{
                    const {userId,body}=value; */}
                    {/* return( */}
                    
                      <DisplayTable
                        data={data}
                        searchData={searchData}
                        updatedData={updatedData}
                      />  
                    {/* ) */}
                {/* })} */}
            </div>
        </div>
    )
}

export default FetchData
