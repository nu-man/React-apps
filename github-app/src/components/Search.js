import { useState } from "react";
function Search({searchUsers,clearUsers,showAlert}) {
  const [username, setUsername] = useState("");
  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };
  const onSubmitHandler=(e) =>{
    e.preventDefault();
   if(username===""){
    showAlert({msg:"Username cannot be empty", type:"danger"})
   }else{
    searchUsers(username)
    setUsername("")
   }
  }
  return (
    <>
      <form className="form" onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="name"
          placeholder="Search Github User..."
          onChange={onChangeHandler}
          value={username}
          autoComplete="off"
        />
        <input
          type="submit"
          value="Search User"
          className="btn btn-dark btn-block"
        />
      </form>

    <button className="btn btn-light btn-block" onClick={clearUsers}> Clear Users</button>
    </>
  );
}
export default Search;
