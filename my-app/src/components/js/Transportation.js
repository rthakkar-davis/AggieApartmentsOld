import '../css/Transportation.css';
import {colors} from '../../colors.js';

function Transportation() {
    const bikeMap = require('../../images/GreenToSilo.png');
    const unitransMap = require('../../images/GreenToSilo.png');

    return (
        <div className="bigTransportationContainer" style={{width: "90%", marginTop: "50px"}}>
            <div>
                <div>
                    <h1 style={{color: colors["blue"]}}>Transportation Details</h1>
                </div>
                <div className="transportationContainer">
                    <div>
                        <div className="imageContainer">
                            <img className="image" src={unitransMap} alt={"NoImage"}/>
                        </div>
                    </div>
                    <div className="travelTimeContainer">
                        <h2 style={{color: colors["blue"], marginTop: 0}}>Travel Time to Silo Terminal</h2>
                        <p style={{color: colors["blue"], fontWeight: "bold"}}>By Walking:
                            <p style={{color: colors["yellow"], fontWeight: "bold"}}> 20 min</p>
                        </p>
                        <p style={{color: colors["blue"], fontWeight: "bold"}}>By Biking: 
                            <p style={{color: colors["yellow"], fontWeight: "bold"}}> 10 min</p>
                        </p>
                        <p style={{color: colors["blue"], fontWeight: "bold"}}>By Driving: 
                            <p style={{color: colors["yellow"], fontWeight: "bold"}}> 15 min</p>
                        </p>
                        <p style={{color: colors["blue"], fontWeight: "bold"}}>By Unitrans: 
                            <p style={{color: colors["yellow"], fontWeight: "bold"}}> 15 min</p>
                        </p>
                        <div>
                            <h2>Bus Lines</h2>
                            <div className="busLineContainer">
                                <div className="busLineIcon">
                                    <p style={{margin: 0, color: colors["white"]}}>V</p>
                                </div>
                                <div className="busLineIcon">
                                    <p style={{margin: 0, color: colors["white"]}}>U</p> 
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
  }
  
  export default Transportation;
  