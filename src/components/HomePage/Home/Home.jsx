import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Footer from "../../Footer/Footer";
import CountDown from "../CountDown/CountDown";


const Home = () => {
    const brands=useLoaderData()
    console.log(brands)
    return (
        <div>
            <Banner></Banner>
            <div>
                <CountDown></CountDown>
            </div>
            <div>
                <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Home;