import shaver from "../assets/services/shaver.png";
import beard from "../assets/services/beard.png";
import mustache from "../assets/services/mustache.png";
import scissors from "../assets/services/scissors-comb.png";


const ServiceBanner = () => {

    
    return(
        <section className="service-banner">
            <div className="services-container">
                <div className="services-text">
                    <h2>OUR SERVICES</h2>
                    <p>
                    Barbershop offers world-class men's haircuts, beard grooming, and hot razor shaves. 
                    Here are just some of the services we are famous for.
                    </p>
                    <button className="green-btn">READ MORE</button>
                </div>
                <div className="services-types">
                    <div className="service">
                        <img src={shaver} alt="person posing" />
                        <h3>SHAVES</h3>
                        <p>Our shaving services will make you look really handsome</p>
                    </div>
                    <div className="service">
                        <img src={scissors} alt="person posing" />
                        <h3>TRADITIONAL HAIRCUTS</h3>
                        <p>One of the most popular services our barbers provide</p>
                    </div>
                    <div className="service">
                        <img src={mustache} alt="person posing" />
                        <h3>MUSTACHE TRIM</h3>
                        <p>Mustaches also need to be trimmed regularly</p>
                    </div>
                    <div className="service">
                        <img src={beard} alt="person posing" />
                        <h3>BEARD TRIM</h3>
                        <p>Well-trimmed beard is a must-have element of every men’s image</p>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default ServiceBanner