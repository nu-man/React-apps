import { useEffect, useState } from "react";
import axios from "axios";
import Users from "./src/components/Users.js"


function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
     const fetchData = async () => {
      try {
        const { data } = await axios.get(`https://api.github.com/users`);
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    
  }, []);
  return(
    <>
        <Navbar />
        <div className="container"> 
            <Users users={data}/>
        </div>
    </>
  )
}
export default App;
