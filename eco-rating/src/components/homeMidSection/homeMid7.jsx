import "./homeMid7.css";
import Undp from "../../assets/images/undp.webp";
import Ex from "../../assets/images/ex.webp";
import Iit from "../../assets/images/iit.webp";
import Arise from "../../assets/images/arise.webp";
import Unep from "../../assets/images/unep.webp";

const HomeMid7 = () => {
    return (
        <div className="icon-bar">
            <div className="icon-container">
                <img src={Undp} alt="Icon 1" className="iconMid511" />
                <img src={Ex} alt="Icon 2" className="iconMid42" />
                <img src={Iit} alt="Icon 3" className="iconMid43" />
                <img src={Arise} alt="Icon 4" className="iconMid44" />
                <img src={Unep} alt="Icon 5" className="iconMid45" />
                {/* <img src={BetterPlanet} alt="Icon 6" className="iconMid46" />
                <img src={VE} alt="Icon 7" className="iconMid417" /> */}
            </div>
        </div>
    )
}

export default HomeMid7;