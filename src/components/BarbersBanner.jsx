import Barbers from "../data/Barbers"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const BarbersBanner = () => {


    const topBarbers = () =>{
        let barbers = []

        for(let i = 0; i < 3; i++){
            barbers.push(Barbers[i])
        }

        return(barbers);
    }


    
    return(
        <div className="barber-banner">
            <div className="barber-intro">
                <h2>OUR BARBERS</h2>
                <p>
                We employ only highly qualified barbers who are not just professionals, 
                but also enjoy maintaining the atmosphere of a classic barbershop.
                </p>
            </div>
            <div className="barber-container">
                {topBarbers().map((barber) =>{
                    return(
                        <div className="barber">
                            <img src={barber.img} alt="barber" />
                            <div className="barber-info">
                                <h3>{barber.name}</h3>
                                <p>{barber.position}</p>
                                <ul className="social-links">
                                    <li><FontAwesomeIcon icon={faTwitter} size="xl" /></li>
                                    <li><FontAwesomeIcon icon={faFacebook} size="xl" /></li>
                                    <li><FontAwesomeIcon icon={faLinkedin} size="xl" /></li>
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
            <button className="green-btn">VIEW ALL TEAM</button>
        </div>
    )

}

export default BarbersBanner;