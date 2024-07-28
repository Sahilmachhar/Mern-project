import { NavLink } from "react-router-dom";
import './navbar.css'
import { useAuth } from "../store/auth";

export const Navbar = () => {

    const { isLoggedIn } = useAuth();

    return(
        <>
            <div className="container">
                <div className="brand-logo">
                    <NavLink to="/" className="nav-link">Sahil tech</NavLink>
                </div>

                <nav>
                    <ul>
                        <li><NavLink to="/" className="nav-link">Home</NavLink></li>
                        <li><NavLink to="/about" className="nav-link">About</NavLink></li>
                        <li><NavLink to="/services" className="nav-link">Services</NavLink></li>
                        <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
                        { isLoggedIn ? (<li><NavLink to="/logout" className="nav-link">Logout</NavLink></li>) 
                                     : (<>
                                        <li><NavLink to="/login" className="nav-link">Login</NavLink></li>
                                        <li><NavLink to="/register" className="nav-link">Register</NavLink></li>                
                                    </>)}
                    
                    </ul>
                </nav>
            </div>
        </>
    );
};