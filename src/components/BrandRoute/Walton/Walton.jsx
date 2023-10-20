import { useLoaderData } from "react-router-dom";
import Slider from "../../BrandPages/Walton/Slider/Slider";
import Card from "../../BrandPages/Walton/Card/Card";


const Walton = () => {
    const products =useLoaderData()
    return (
        <div>
           <Slider></Slider>
           <div className="w-[80%] mx-auto grid grid-cols-1 gap-3 mt-4 md:grid-cols-2 lg:grid-cols-3">
            {
                products.map((product) =><Card key={product._id} product={product}></Card>)
            }
           </div>
        </div>
    );
};

export default Walton;