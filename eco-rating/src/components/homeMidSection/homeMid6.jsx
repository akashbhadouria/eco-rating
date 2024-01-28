import "./homeMid6.css";
import SatyaImg from "../../assets/images/Satya.webp";
import SahilImg from "../../assets/images/Sahil.webp";
import JpImg from "../../assets/images/Jp.webp";
import AbhiImg from "../../assets/images/Abhi.webp";

const HomeMid6 = () => {
    return (
        <div className="icon-bar6">
            <div>
                <h1 className="centeredTextMid6">Experts</h1>
            </div>
            <div className="cardContainerMid6">
                <div className="cardMid6">
                    <img src={SatyaImg} alt="Satya Image" className="satyaImg"/>
                    <div className="contentWrapper">
                        <h1>Satya S. Tripathi</h1>
                        <p>Satya S. Tripathi is the former Assistant Secretary-General, Head New York Office at UN Environment.</p>
                    </div>
                </div>
                <div className="cardMid6">
                    <img src={JpImg} alt="Satya Image" className="satyaImg"/>
                    <div className="contentWrapper">
                        <h1>Dr. JP Gupta</h1>
                        <p>Dr. JP Gupta is the Chairman of the Environment Committee of PHDCCI and the MD at GreenStat India.</p>
                    </div>
                </div>
            </div>
            <div className="cardContainerMid6">
                <div className="cardMid6">
                    <img src={AbhiImg} alt="Satya Image" className="satyaImg"/>
                    <div className="contentWrapper">
                        <h1>Abhi Dhar</h1>
                        <p>Abhi Dhar was the former Chief Information and Technology Officer at TransUnion CIBIL.</p>
                    </div>
                </div>
                <div className="cardMid6">
                    <img src={SahilImg} alt="Satya Image" className="satyaImg"/>
                    <div className="contentWrapper">
                        <h1>Sahil Dharia</h1>
                        <p>Sahil Dharia is the Founder and CEO at Soothe Healthcare, the fastest growing personal hygiene company in India.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeMid6;