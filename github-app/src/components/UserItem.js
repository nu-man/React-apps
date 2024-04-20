import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function UserItem({ user }) {
  return (
    <div className="card text-center">
      <img src={user.avatar_url} alt="avatar" style={{ width: "120px" }} />
      <h3>{user.login}</h3>
      <div>
        <Link to={`/user/${user.login}`} className="btn btn-dark btn-sm my-1">Git Profile</Link>
      </div>
    </div>
  );
}

UserItem.defaultProps = {
  user: {
    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    login: "nu-man",
    html_url: "https://github.com/nu-man",
  },
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;

