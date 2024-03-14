import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [totalData, setTotalData] = useState([]);
  const [data,setData]=useState([])
  const [completed,setCompleted]=useState(true)
  useEffect(() => {
    let getdata = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/todos`
        );
        setTotalData(res.data)
        setData(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getdata();
  }, []);

  const taskStatus = () => {
    if(completed){
      const filteredData=totalData.filter(ele=>ele.completed)//filtering all true tasks
      setData(filteredData)
    }else{
      const filteredData=totalData.filter(ele=>!ele.completed)//filtering all false tasks
      setData(filteredData)
    }
   setCompleted(!completed)
  };
  return (
    <>
      <center>
        <button onClick={taskStatus}>Task Status </button>
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
