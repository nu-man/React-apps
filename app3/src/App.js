import { useState,useEffect } from 'react';
import axios from 'axios';

import './App.css';

function App() {
const [data,setData]=useState([]);
useEffect(() => {
  let getdata = async () => {
    try {
      const {data} = await axios.get( `https://jsonplaceholder.typicode.com/users`);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };
  getdata();
}, []);

const getaddress=(obj)=>{
  let arr=Object.values(obj)
  let elms=[]
  for(let i=0;i<arr.length-1;i++){
    elms.push(<p keys={i}>{arr[i]}</p>)

  }
  return elms

}
  return (
    <>
      <center>
        <table>
          <thead>
            <tr>
              <th rowSpan={2}>Id</th>
              <th rowSpan={2}>Name</th>
              <th rowSpan={2}>UserName</th>
              <th rowSpan={2}>Email</th>
              <th rowSpan={2}>Address</th>
              <th colSpan={2}>Geo</th>
              <th rowSpan={2}>Phone</th>
              <th rowSpan={2}>Website</th>
              <th rowSpan={2}>Company</th>
            </tr>
            <tr>
              <th>Lat</th>
              <th>Lon</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ele,index)=>(
              <tr key={index}>
                <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td>{ele.username}</td>
                <td>{ele.email}</td>
                <td>{getaddress(ele.address)}</td>
                <td>{ele.address.geo.lat}</td>
                <td>{ele.address.geo.lng}</td>
                <td>{ele.phone}</td>
                <td><a href={ele.website}>{ele.website}</a></td>
                <td>{Object.values(ele.company).map((ele,i)=>(<p key={i}>{ele}</p>))}</td>


              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </>

  )
}

export default App;
