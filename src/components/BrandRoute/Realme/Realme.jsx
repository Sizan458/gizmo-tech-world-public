import { useLoaderData } from "react-router-dom";
import Slider from "../../BrandPages/Realme/Silder/Slider";
import Card from "../../BrandPages/Realme/Card/Card";


const Realme = () => {
    const products =useLoaderData()
    return (
        <div>
           <Slider></Slider>
           <div className="w-[80%] mx-auto mt-3 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
              {
                products.map(product =><Card key={product._id} product={product}></Card>)
              }
           </div>
        </div>
    );
};

export default Realme;