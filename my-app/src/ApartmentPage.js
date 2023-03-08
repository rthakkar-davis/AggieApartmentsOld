import './components/css/ApartmentPage.css';
import TopQualities from './components/js/TopQualities.js'
import Transportation from './components/js/Transportation.js';
import Reviews from './components/js/Reviews.js';
import {useState} from "react";
import { BsHeartFill, BsHeart  } from "react-icons/bs";
import {FaQuestion} from "react-icons/fa";
import {colors} from './colors.js'
import QnA from './components/js/QnA';


function ApartmentPage() {
    const [pressedHeart, setPressedHeart] = useState(false);
    const unitransMap = require('./images/GreenToSilo.png');

    const qna = [
      {
        question: "What utilites are provided?",
        answer: "Everything from gas, water, sewer, internet, PG&E are provided."  ,
        name: "Mary Jones",
        time: "April 4th, 2020"
      },
      {
        question:"What's a rent looking like?",
        answer: "Rent for a single is about $1200.",
        name: "Mary Jones",
        time: "April 4th, 2020"
      },
      {
        question: "How fast is the internet?",
        answer: "Internet is about 200mbps. We provide a fiber connection." ,
        name: "Mary Jones",
        time: "April 4th, 2020"
      }
    ]

    const handleHeartClick = () => {
        setPressedHeart(!pressedHeart);
      };
    

    return (
      <div className="bigContainer">
        <div className="nameContainer">
            <div className="nameAndAddress">
                <h1 style={{color: colors["blue"]}}>The Green at West Village</h1>
                <div>
                  <div>
                    <p style={{color: colors["blue"]}}>⭐ 3.0 . 300 reviews . 123 Covell Blvd, Davis CA 95616</p>
                  </div>
                </div>                
            </div>
            <div className="priorityContainer">
              <div onClick={handleHeartClick}>
                {pressedHeart ?  <BsHeartFill color="red" fontSize="10px"/> : <BsHeart fontSize="10px" /> }
              </div>
              <p style={{marginRight: "15px"}}> Priority </p>
              <FaQuestion fontSize="10px"/>
              <p>Compare to current priority</p>
            </div>
        </div>
        <div className="aptImageContainer">
          <img className="image" src={unitransMap} alt={"NoImage"}/>
        </div>
        <TopQualities />
        <Transportation />
        <QnA qna={qna}/>
        <Reviews />
      </div>
    );
  }
  
  export default ApartmentPage;
  