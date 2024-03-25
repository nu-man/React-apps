import UserItem from "./UserItem" 
import PropTypes from "prop-types";
function Users({users}){
    return (
        <div style={styles}>
            {users.map((user) => <UserItem key={user.id} user={user} />)}

        </div>
    )
}
Users.propTypes = {
    users: PropTypes.array.isRequired,
  };
const styles={
    display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gridGap: "1rem"

}
export default Users