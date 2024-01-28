import Gradient from "../../assets/images/gradient.webp";
import Iicon from "../../assets/images/icon2.png";
import Iicon3 from "../../assets/images/icon3.png";
import Iicon4 from "../../assets/images/icon4.png";
import "./homeMid2.css";

const HomeMid2 = () => {
    return (
        <div className="containerMid2">
            <div className="colMid2 withImage">
                <img src={Gradient} alt="Gradient" className="colImage" />
                <div className="textOverlay">Need For Rating</div>
            </div>
            <div className="colMid2">
                <div className="col2Content">
                        <img src={Iicon} alt="I image" className="col2Image" />
                    <div className="h1Container">
                        <p>69%</p>
                    </div>
                    <div>
                        <p>Conscious Consumers</p>
                    </div>
                </div>
            </div>
            <div className="colMid2">
                <div className="col2Content">
                        <img src={Iicon3} alt="I image" className="col2Image" />
                    <div className="h1Container">
                        <p>81%</p>
                    </div>
                    <div>
                        <p>Demands Disclosure</p>
                    </div>
                </div>
            </div>
            <div className="colMid2">
                <div className="col2Content">
                        <img src={Iicon4} alt="I image" className="col2Image4" />
                    <div className="h1Container">
                        <p>53%</p>
                    </div>
                    <div>
                        <p>Wants Credibility</p>
                    </div>
                </div>
            </div>
        </div>
      );
}

export default HomeMid2;
