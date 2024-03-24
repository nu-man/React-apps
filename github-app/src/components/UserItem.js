const { default: userEvent } = require("@testing-library/user-event");

function UserItem(){
    return(
        <div className="card text-center">
            <img src={userEvent.avatar_url} alt="avatar" style={{width:"120px"}}/>
            <h3>{userEvent.login}</h3>
            <div>
                <a href={user.html_url}/>
            </div>
        </div>
    )
}