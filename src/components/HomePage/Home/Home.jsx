import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Footer from "../../Footer/Footer";
import CountDown from "../CountDown/CountDown";
import TopProducts from "../TopProducts/TopProducts";
import Cards from "../CardsSection/Cards";


const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <div>
                <CountDown></CountDown>
            </div>
           <Cards></Cards>
            <div>
                <TopProducts></TopProducts>
            </div>
            <div>
                <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Home;