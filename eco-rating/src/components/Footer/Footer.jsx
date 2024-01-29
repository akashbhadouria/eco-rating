import './Footer.css';
import logo from "../../assets/images/footer_logo2.png";
import fb from "../../assets/images/fb.png";
import linkedIn from "../../assets/images/linkedin.png";
import twitter from "../../assets/images/twitter.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="column">
                <div className='logoContainer'>
                    <img src={logo} alt="Logo" className='logo' />
                </div>
                <div className='textContainer1'>
                    <p>(025) 367 09876</p>
                    <p>info@ratings.eco</p>
                    <p>1488, 447 Broadway, 2nd Floor,</p>
                    <p>New York 10013</p>
                </div>
            </div>
            <div className="column">
                    <div className='textContainer2'>
                        <p>Home</p>
                        <p>Gen AI</p>
                        <p>Clients</p>
                        <p>Method</p>
                        <p>About Us</p>
                        <button className="contact-us">CONTACT US</button>
                    </div>
            </div>
            <div className="column">
                <div className='textContainer3'>
                        <p>Follow Us On:</p>
                        <div className='socialIcons'>
                            <a href="#" className="icon">
                                <img src={linkedIn} alt="Icon 1" />
                            </a>
                            <a href="#" className="icon">
                                <img src={fb} alt="Icon 2" />
                            </a>
                            <a href="#" className="icon">
                                <img src={twitter} alt="Icon 3" />
                            </a>
                        </div>
                    </div>
            </div>
        </footer>
    )
}

export default Footer;