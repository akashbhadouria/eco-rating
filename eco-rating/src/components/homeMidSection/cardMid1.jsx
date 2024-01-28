
import Customer from "../../assets/images/customer.png";
import Collaborate from "../../assets/images/collaborate.png";
import RatingImage from "../../assets/images/rating1.png";
import "./cardMid1.css";

const CardMid1 = () => {
    return (
        <div className="box">
            <div className="imgContainer">
                <img src={Collaborate} alt="Cover Image" className="collab-image"/>
            </div>
          <div className="cardText1">
            <p>Integration at Point Of Contact</p>
          </div>
          <div className="ratingImageContainer">
            <img src={RatingImage} alt="rating image" className="rating-image"/>
          </div>
          <div className="cardText2">
            <p>Ratings on a scale of 10</p>
          </div>
          <div className="customerImageContainer">
            <img src={Customer} alt="Customer Image" className="customer-image"/>
          </div>
          <div className="cardText3">
            <p>Attract Conscious Consumers</p>
          </div>
        </div>
      );
}

export default CardMid1;