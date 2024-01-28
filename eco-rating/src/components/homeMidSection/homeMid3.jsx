import "./homeMid3.css";
import brushImg from "../../assets/images/brush.webp";
import GreenScore from "../../assets/images/green_score.png";

const HomeMid3 = () => {
    return (
        <div className="containerMid3">
            <div className="textContainerMid3">
                <h1>Our Clients</h1>
                <p>
                    At EcoRatings, we believe in knowing the sustainability impact of every product and<br/> service.
                </p>
            </div>
            <div className="mid3Container">
                <div className="boxMid3">
                    <div className="colMid3">
                        <img src={brushImg} alt="brush Image" className="brush-image"/>
                        <div>
                            <h1>Bamboo Stand</h1>
                            <h2>Rs. 199</h2>
                            <h3>Product Description​​</h3>
                            <div className="divLi">
                                <li>Grow your style - renewable bamboo fights climate change with every stand.</li>
                                <li>Our bamboo comes from responsibly managed forests, supporting communities and ecosystems.</li>
                                <li>​Ditch the landfill, embrace quality.</li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="greenScore">
                    <img src={GreenScore} alt="brush Image" className="score-image"/>
                </div>
            </div>
        </div>
    );
}

export default HomeMid3;
