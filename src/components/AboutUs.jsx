import person1 from "../assets/about/person-1.jpg";
import person2 from "../assets/about/person-2.jpg";
import person3 from "../assets/about/person-3.jpg";


const AboutUs = () => {

    
    return(
        <section className="about-section gray-blue-bg">
            <div className="about-container">
                <div className="about-imgs">
                    <div className="col-img1">
                        <img src={person1} alt="person posing" />
                    </div>
                    <div className="col-img2">
                        <img src={person2} alt="person posing" />
                    </div>
                    <div className="col-img3">
                        <img src={person3} alt="person posing" />
                    </div>
                </div>
                <div className="about-us">
                    <h2>WHO WE ARE</h2>
                    <p>
                    Barbershop is a team of highly qualified barbers dedicated to offering the best value. 
                    We do this by providing high quality salon services for men and boys, in a warm, friendly atmosphere.
                    </p>
                    <button className="green-btn">READ MORE</button>
                </div>
            </div>
        </section>
    )

}

export default AboutUs