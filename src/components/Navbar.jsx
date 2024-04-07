import { useNavigate } from "react-router-dom";
import logo from "../assets/logo/logo.png"


const Navbar = () => {

    const navigate = useNavigate();

    return(
        <>
            <nav>
                <div className="nav-container">
                    <ul className="nav-links">
                        <li onClick={() => navigate("/home")}>Home</li>
                        <li onClick={() => navigate("/about")}>About</li>
                        <li onClick={() => navigate("/services")}>Services</li>
                        <li onClick={() => navigate("/home")}><img src={logo} className="logo-img" alt="Aegise Logo"/></li>
                        <li onClick={() => navigate("/blog")}>Blog</li>
                        <li onClick={() => navigate("/testimonials")}>Testimonials</li>
                        <li onClick={() => navigate("/contacts")}>Contact</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;