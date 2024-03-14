import { useState,useEffect } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    let getdata = async () => {
      try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
        setData(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getdata()
  },[])
  
  
  return (
    <>
      <center>
        <button>Task Status </button>
        <table>
          <thead>
            <tr>
              <th>UserId</th>
              <th>Id</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {data.map((obj) => (

            
              <tr key={obj.id}>
                <td>{obj.id}</td>
                <td>{obj.userId}</td>

                <td>{obj.title}</td>
                <td>{obj.completed ? "True" : "False"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </>
  );
}
export default App;
