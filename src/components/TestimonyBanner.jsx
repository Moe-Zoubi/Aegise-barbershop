import Reviews from "../data/Reviews"
import { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";


const TestimonyBanner = () => {

    const [counter, setCounter] = useState(0);


    function slider(direction){
        if(direction === "left"){
            if(counter === 0){
                setCounter(Reviews.length - 1);
            }else{
                setCounter(counter - 1);
            }
        }else{
            if(counter === Reviews.length - 1){
                setCounter(0);
            }else{
                setCounter(counter + 1);
            }
        }
    }


    return(
        <div className="testimony-banner gray-blue-bg">
            <div className="testimony-intro">
                <h2>TESTIMONIALS</h2>
                <p>
                These reviews that our clients have recently submitted are the best way to learn more about our barbershop’s 
                level of service and customer support.
                </p>
            </div>
            <div className="testimony-carousel">
                {Reviews.map((review) => {
                    return(
                        <div className="slide" key={review.id} style={{transform: `translate(-${counter * 100}%)`}}>
                            <div className="slide-arrow">
                                <FontAwesomeIcon icon={faChevronLeft} onClick={() => slider("left")} />
                            </div>
                            <div className={counter === review.id - 1 ? "review-item review-animation" : "review-item"}>
                                <img src={review.img} alt="a person" />
                                <h3>{review.name}</h3>
                                <p>{review.review}</p>
                                <ul className="social-links">
                                    <li><FontAwesomeIcon icon={faTwitter} size="xl" /></li>
                                    <li><FontAwesomeIcon icon={faFacebook} size="xl" /></li>
                                    <li><FontAwesomeIcon icon={faLinkedin} size="xl" /></li>
                                </ul>
                            </div>
                            <div className="slide-arrow">
                                <FontAwesomeIcon icon={faChevronRight} onClick={() => slider("right")} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}



export default TestimonyBanner;