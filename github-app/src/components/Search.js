import { useState } from "react";
function Search() {
  const [username, setUsername] = useState("");
  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };
  return (
    <>
      <form className="form">
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
//console.log("mohd")