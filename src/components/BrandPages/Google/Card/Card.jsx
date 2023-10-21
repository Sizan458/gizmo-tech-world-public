import { Link } from "react-router-dom";


const Card = ({product}) => {
    const{img,_id, brand,type,name,price,reating}=product ||{};
    return (
        <div>
             <div className="card  bg-base-100 shadow-xl">
  <figure><img src={img} className="h-[200px] p-2" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p className="text-xl">Brand:{brand}</p>
    <p className="text-xl">Type:{type}</p>
    <div>
        <div className="lg:flex gap-1">
        <p className="text-xl font-bold">Price:{price}TK</p>
       <p className="text-xl font-bold">Rating:{reating}</p>
        </div>
    </div>
    <div className="card-actions justify-end mt-1">
      <div>
      <Link to={`/google/${_id}`}>
      <button className="btn btn-sm mr-2 bg-slate-500">See More</button>
      </Link>
      </div>
      <div>
     <Link to={`/update/${_id}`}>
     <button className="btn btn-sm  bg-slate-500">UPdate</button>
     </Link>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;