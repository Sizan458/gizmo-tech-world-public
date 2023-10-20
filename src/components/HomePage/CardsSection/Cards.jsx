import { Link } from "react-router-dom";


const Cards = ({brands}) => {
    const {_id,img,brand}=brands;
   
   
    return (
        <Link  to={`/brand/${_id}`}>
       <div className=" ">
        
       <div className="card  shadow-xl md:W-[520px]">
  <div className="card-body">
    <h2 className="card-title">{brand}</h2>
    
  </div>
  <figure><img src={img} className="h-[250px] w-full" /></figure>
</div>
        
       </div>
       </Link>
    );
};

export default Cards;