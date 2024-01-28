import Cover from "../components/Cover/cover";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import CardMid1 from "../components/homeMidSection/cardMid1";
import HomeMid from "../components/homeMidSection/homeMid";
import HomeMid2 from "../components/homeMidSection/homeMid2";


const HomePage = () => {
    return <>
            <Nav/>
            <Cover/>
            <HomeMid/>
            {/* <HomeMid2/> */}
            {/* <CardMid1/> */}
            <Footer/>
        </>
}

export default HomePage;