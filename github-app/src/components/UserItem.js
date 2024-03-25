import React from "react";
import PropTypes from "prop-types";

function UserItem({ user }) {
  return (
    <div className="card text-center">
      <img src={user.avatar_url} alt="avatar" style={{ width: "120px" }} />
      <h3>{user.login}</h3>
      <div>
        <a href={user.html_url} className="btn btn-dark btn-sm my-1">{" "}Git Profile{" "}</a>
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

