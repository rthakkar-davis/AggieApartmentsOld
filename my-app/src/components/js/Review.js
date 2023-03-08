import '../css/Review.css';

function Review({name, rating, opinion}) {

    return (
        <div className="reviewBigContainer">
            <div className="ratingBigContainer">
                <h3 style={{margin:0}}>Rating</h3>
                <div className="ratingContainer">
                    <h3><b>4.0</b></h3>
                </div>
            </div>
            <div className='container'>
                <div className='reviewNameContainer'>
                    <h2 style={{marginRight: "20px"}}>{name}</h2>
                    <h2>⭐ {rating}/5</h2>
                </div>
                <p>Opinion: {opinion}</p>
            </div>
        </div>
    );
  }
  
  export default Review;
  