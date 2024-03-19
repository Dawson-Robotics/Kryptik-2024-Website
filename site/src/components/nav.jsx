import './nav.css'
import {Link} from "react-router-dom";

export function Nav(){
    return(
        <>
            <nav id="nav-nav">
                <Link to="/"> <h1>DAWTREK</h1> </Link>
                <Link to="">Departments</Link>
                <Link to="">Crew</Link>
                <Link to="">Mission</Link>
                <Link to="">Media</Link>
                <Link to="">Journal</Link>
            </nav>
        </>
    )
}