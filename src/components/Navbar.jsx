import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo/logo.png";
import mobileLogo from "../assets/logo/mobile-logo.png"
import bars from "../assets/other/bars.png";
import xmark from "../assets/other/xmark.png";


const Navbar = () => {

    const navigate = useNavigate();

    const [shadow, setShadow] = useState(false);
    const [toggleNav, setToggleNav] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 150) {
            setShadow(true);
        } else {
            setShadow(false);
        }
      };

    window.addEventListener("scroll", handleScroll);

    return(
        <>
            <nav>
                <div className={shadow ? "nav-container" : "nav-container"}>
                    <ul className={shadow ? "nav-links bottom-shadow" : "nav-links"}>
                        <li onClick={() => navigate("/home")}>Home</li>
                        <li onClick={() => navigate("/about")}>About</li>
                        <li onClick={() => navigate("/services")}>Services</li>
                        {!shadow && <li onClick={() => navigate("/home")}><img src={logo} className="logo-img" alt="Aegise Logo"/></li>}
                        <li onClick={() => navigate("/blog")}>Blog</li>
                        <li onClick={() => navigate("/testimonials")}>Testimonials</li>
                        <li onClick={() => navigate("/contacts")}>Contact</li>
                    </ul>
                    <div className="mobile-nav ">
                        <ul className={shadow ? "mobile-flex bottom-shadow" : "mobile-flex"}>
                            <li onClick={() => navigate("/home")}><img src={mobileLogo} className="mobile-logo" alt="mobile Logo"/></li>
                            <li onClick={() => setToggleNav(!toggleNav)}><img src={bars} alt="bars Logo" className="bar-icon"/></li>
                        </ul>
                        <div  className={toggleNav ? "show-mobile-nav" : "hide-mobile-nav"}>
                            <div className="close-icon"><img src={xmark} alt="X Logo" onClick={() => setToggleNav(!toggleNav)} /></div>
                            <ul className="mobile-links">
                                <li onClick={() => navigate("/home")}>Home</li>
                                <li onClick={() => navigate("/about")}>About</li>
                                <li onClick={() => navigate("/services")}>Services</li>
                                <li onClick={() => navigate("/blog")}>Blog</li>
                                <li onClick={() => navigate("/testimonials")}>Testimonials</li>
                                <li onClick={() => navigate("/contacts")}>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;