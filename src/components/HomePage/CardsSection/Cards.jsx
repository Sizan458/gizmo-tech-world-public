import { Link } from "react-router-dom";


const Cards = () => {
    
   
   
    return (
        
       <div className=" w-[80%] mx-auto grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        <Link to='/samsung'>
        <div className="card  bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Samsung</h2>
  </div>
  <figure><img src="https://i.ibb.co/BrSjX3f/R.png" className="h-[140px] p-1 md:h-[230px] lg:h-[320px]" /></figure>
</div>
        </Link>
        <Link to='/xiaomi'>
        <div className="card  bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Xiaomi</h2>
    
  </div>
  <figure><img src="https://i.ibb.co/dmx35cs/1-ur-OEB0cdo-JFbf-H1-Ey-ZYs-g.png" className="h-[140px]p-1 md:h-[230px]  lg:h-[320px]" /></figure>
</div>
        </Link>
        <Link to='/oneplus'>
        <div className="card  bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Oneplus</h2>
    
  </div>
  <figure><img src="https://i.ibb.co/z52Yv1q/R-2.jpg" className=" h-[140px] p-1 md:h-[230px] lg:h-[320px]"/></figure>
</div>
        </Link>
        <Link to='/walton'>
        <div className="card  bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Walton</h2>
   
  </div>
  <figure><img src="https://i.ibb.co/88rbQC8/OIP.jpg" className="h-[140px] p-1 md:h-[230px] lg:h-[320px]" /></figure>
</div>
        </Link>
        <Link to="/google">
        <div className="card  bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Google</h2>
   
  </div>
  <figure><img src="https://i.ibb.co/wgX5tWg/OIP-7.jpg" className="h-[140px] p-1 md:h-[230px] lg:h-[320px]" /></figure>
</div>
        </Link>
        <Link to='/realme'>
        <div className="card  bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Realme</h2>
  
  </div>
  <figure><img src="https://i.ibb.co/PZQbRCX/realme-logo.png" className="h-[140px] p-1 md:h-[230px] lg:h-[320px]" /></figure>
</div>
        </Link>
       
        
       </div>
       
    );
};

export default Cards;