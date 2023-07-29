import './RatingBar.css';

const RatingBar = ({ rating }) => {
    const ratingPercentage = (rating / 5) * 100;
    const barStyle = {
      width: `${ratingPercentage}%`,
    };
  
    return (
      <div className="rating-bar">
        <div className="rating-bar-inner" style={barStyle}></div>
      </div>
    );
  };

  export default RatingBar;