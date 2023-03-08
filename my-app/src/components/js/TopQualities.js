import '../css/TopQualities.css';
import {useState} from "react";
import { BsHeartFill, BsHeart  } from "react-icons/bs";
import {FaQuestion} from "react-icons/fa";
import {colors} from "../../colors.js";


function TopQualities() {
    const listQualities = ["Clean", "Close to campus", "Quick maintenance", "Cheap", "Close to groceries", "Quiet", "Fast internet"];

    return (
        <div className='topQualitiesContainer'>
            <h2>Studio - 4 Bedroom Apartment</h2>
            <div className='listQualities'>
                {listQualities.map((quality) => (
                    <button style={{marginRight: "5px", marginBotton: "5px", color: colors["blue"], fontWeight: "bold"}}>{quality}</button>
                ))}
            </div>
            <p> The Green at West Village is relatively far from the campus compared to all other on-campus housing options, but it
                    is still close enough that you could bike to Silo in less than 20 minutes.
             </p>
        </div>
    );
  }
  
  export default TopQualities;
  