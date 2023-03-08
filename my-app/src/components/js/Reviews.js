import '../css/Reviews.css';
import Review from './Review.js';

function Reviews() {

    return (
        <div className="rContainer">
            <h1> Reviews </h1>
            <div className='reviewContainer'>
                <Review name="Paul" rating="3" opinion="It's aight"/>
                <Review name="David" rating="4" opinion="Very good"/>
                <Review name="Omar" rating="5" opinion="So good. No complaint. Kinda expensive."/>
            </div>
        </div>
    );
  }
  
  export default Reviews;
  