import "./style.css";
import Hero from "../../components/Hero";
import AboutUs from "../../components/AboutUs";
import ServiceBanner from "../../components/ServiceBanner";



const Home = () => {

    return(
        <div>
            <Hero />
            <AboutUs />
            <ServiceBanner />
        </div>
    )
}

export default Home;