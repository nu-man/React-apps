import { useEffect, useState } from "react";
import axios from "axios";
import Users from "./components/Users.js";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Search from "./components/Search.js";
import Loading from "./components/loading.js"
import Alert from "./components/Alert.js";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(true)
  const [alert,setAlert]=useState(null)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true)
        const { data } = await axios.get(`https://api.github.com/users`);
        setloading(false)
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  
  //Searchig a user
  const searchUsers = async (username) => {
  
      try {
        const {data} = await axios.get(
          `https://api.github.com/search/users?q=${username}`
        );
        setUsers(data.items);
      } catch (error) {}
    
  };
  //Clearing the users
  const clearUsers=()=>{
    setUsers([])
  }
 //Giving Alerts
  const showAlert=(alert)=>{
    setAlert(alert)
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <Alert alert={alert}/>
        <Search searchUsers={searchUsers} clearUsers={clearUsers} showAlert={showAlert}/>
        {loading && <Loading/>} 
        <Users users={users} />
      </div>
    </>
  );
}
export default App;
