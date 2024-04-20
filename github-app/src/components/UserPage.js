import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
function UserPage({getUser,user}){
    const {username}=useParams();
    console.log(user);
        useEffect(()=>{
            getUser(username)
    },[])
    return(
        <h1>User Page Component</h1>
    )
}
export default UserPage