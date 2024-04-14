import "./style.css";
import Hero from "../../components/Hero";
import AboutUs from "../../components/AboutUs";
import ServiceBanner from "../../components/ServiceBanner";
import TestimonyBanner from "../../components/TestimonyBanner";



const Home = () => {

    return(
        <div>
            <Hero />
            <AboutUs />
            <ServiceBanner />
            <TestimonyBanner />
        </div>
    )
}

export default Home;