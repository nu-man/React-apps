import { useEffect, useState } from "react";
import axios from "axios";
import Users from "./components/Users.js";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Search from "./components/Search.js";
import Loading from "./components/loading.js";
import Alert from "./components/Alert.js";
import Contact from "./components/Contact.js";
import About from "./components/About.js";
import UserPage from "./components/UserPage.js";

//Routes
import { Routes, Route } from "react-router-dom";
function App() {
  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(true);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        const { data } = await axios.get(`https://api.github.com/users`);
        setloading(false);
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
      const { data } = await axios.get(
        `https://api.github.com/search/users?q=${username}`
      );
      setUsers(data.items);
    } catch (error) {}
  };
  //Clearing the users
  const clearUsers = () => {
    setUsers([]);
  };
  //Giving Alerts
  const showAlert = (alert) => {
    setAlert(alert);
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="container">
                <Alert alert={alert} />
                <Search
                  searchUsers={searchUsers}
                  clearUsers={clearUsers}
                  showAlert={showAlert}
                />
                {loading && <Loading />}
                {<Users users={users} />}
              </div>
            </>
          }
        >
        </Route>
        <Route path="/contact" element={<Contact />}>
        </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/userpage" element={<UserPage/>}></Route>
      </Routes>
    </>
  );
}
export default App;
