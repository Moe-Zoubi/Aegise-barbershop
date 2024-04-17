import "./style.css";
import Hero from "../../components/Hero";
import AboutUs from "../../components/AboutUs";
import ServiceBanner from "../../components/ServiceBanner";
import TestimonyBanner from "../../components/TestimonyBanner";
import BarbersBanner from "../../components/BarbersBanner";
import BlogBanner from "../../components/BlogBanner";



const Home = () => {

    return(
        <div>
            <Hero />
            <AboutUs />
            <ServiceBanner />
            <TestimonyBanner />
            <BarbersBanner />
            <BlogBanner />
        </div>
    )
}

export default Home;