// import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <nav className="navbar bg-primary">
                <h1>
                    <a href='/'> <i className="fab fa-github" />GitHub Search Engine</a>
                </h1>
                <ul>
                    <li>
                        <a href="/"> Home</a>
                    </li>
                    <li>
                        <a href="/Contact"> Contact </a>
                    </li>
                    <li>
                        <a href="/About"> About Us </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;