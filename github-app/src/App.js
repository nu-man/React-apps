import { useEffect, useState } from "react";
import axios from "axios";
import Users from "./components/Users.js";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Search from "./components/Search.js";
import Loading from "./components/loading.js"

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(true)
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
  
  const searchUsers = async (username) => {
  
      try {
        const {data} = await axios.get(
          `https://api.github.com/search/users?q=${username}`
        );
        setUsers(data.items);
      } catch (error) {}
    
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <Search searchUsers={searchUsers} />
        {loading && <Loading/>} 
        <Users users={users} />
      </div>
    </>
  );
}
export default App;
