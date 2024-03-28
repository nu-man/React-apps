import { useState } from "react";
function Search({searchUsers}) {
  const [username, setUsername] = useState("");
  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };
  const onSubmitHandler=(e) =>{
    e.preventDefault();
    searchUsers(username)
  }
  return (
    <>
      <form className="form" onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="name"
          placeholder="Search Github User..."
          onChange={onChangeHandler}
        />
        <input
          type="submit"
          value="Search User"
          className="btn btn-dark btn-block"
        />
      </form>
    </>
  );
}
export default Search;
