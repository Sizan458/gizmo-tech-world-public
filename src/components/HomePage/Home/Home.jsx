import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Footer from "../../Footer/Footer";
import CountDown from "../CountDown/CountDown";
import TopProducts from "../TopProducts/TopProducts";
import Cards from "../CardsSection/Cards";


const Home = () => {
    const brands =useLoaderData()
    
    return (
        <div>
            <Banner></Banner>
            <div>
                <CountDown></CountDown>
            </div>
           <div className="w-[80%] mx-auto  grid grid-cols-1 mt-3 mb-3 gap-2 md:grid-cols-2 lg:grid-cols-3">
           {
            brands.map(brands=><Cards key={brands._id}  brands={brands}></Cards>)
           }
           </div>
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