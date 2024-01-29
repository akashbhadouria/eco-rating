import { lazy, Suspense } from 'react';

const Cover = lazy(() => import('../components/Cover/cover'));
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
const HomeMid = lazy(() => import('../components/homeMidSection/homeMid'));


const HomePage = () => {
    return <>
            <Nav/>
            <Suspense fallback={<div>Loading...</div>}>
                <Cover/>
                <HomeMid/>
            </Suspense>
            {/* <HomeMid2/> */}
            {/* <CardMid1/> */}
            <Footer/>
        </>
}

export default HomePage;