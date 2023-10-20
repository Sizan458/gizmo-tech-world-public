import { useLoaderData } from "react-router-dom";
import Slider from "../../BrandPages/Samsung/Slider/Slider";
import Card from "../../BrandPages/Samsung/Card/Card";


const Samsung = () => {
    const products =useLoaderData()
    
    return (
        <div>
           <Slider></Slider>
           <div className="grid grid-cols-1  gap-2 w-[80%] mx-auto mt-3 md:grid-cols-2 lg:grid-cols-3">
            {
                products.map(product =><Card key={product.id} product={product}></Card>)
            }
           </div>
        </div>
    );
};

export default Samsung;