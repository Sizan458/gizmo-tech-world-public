import { useLoaderData } from "react-router-dom";
import Slider from "../../BrandPages/Google/Slider/Slider";
import Card from "../../BrandPages/Google/Card/Card";


const Google = () => {
    const products=useLoaderData()
    return (
        <div>
            <Slider></Slider>
            <div className="mt-3 w-[80%]  mx-auto grid grid-cols-1 gap-3  md:grid-cols-2 lg:grid-cols-3">
            {
                products.map((product) =><Card key={product._id} product={product}></Card>)
            }
            </div>
        </div>
    );
};

export default Google;