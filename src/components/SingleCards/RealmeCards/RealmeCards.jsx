import Footer from "../../Footer/Footer";

import { BsFillCartCheckFill } from "react-icons/bs";


const RealmeCards = ({data}) => {
    const{img,_id, brand,type,name,price,reating,
    }=data ||{};
    return (
        <div className="mt-3 lg:w-[98%] mx-auto">
           <div>
           <div className="hero  bg-base-200">
  <div className="hero-content ">
    <div>
    <img src={img}  className="md:w-[450px] lg:w-[600px]"></img>
    </div>
    <div>
        <p className=" text-xl md:text-2xl">Name:{name}</p>
        <p  className=" text-xl md:text-2xl">Brand:{brand}</p>
        <p className=" text-xl md:text-2xl">Rating:{reating}</p>
        <p className=" text-xl md:text-2xl">Price:{price}TK</p>
        <p className=" text-xl md:text-2xl">Health:100%</p>
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn glass mt-3 text-2xl bg-orange-300" onClick={()=>document.getElementById('my_modal_3').showModal()}><BsFillCartCheckFill></BsFillCartCheckFill></button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    
    <p className="py-4 text-red-400 text-center">Product Is not available now</p>
  </div>
</dialog>
        </div>
        
    </div>
  </div>
</div>
           </div>
           <div className="mt-2">
           <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
    Why Choose us ?
  </div>
  <div className="collapse-content"> 
    <p>We give you 100% Customer </p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
    Is Product is  original?
  </div>
  <div className="collapse-content"> 
    <p>Yes</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
    Every product have  warranty?
  </div>
  <div className="collapse-content"> 
    <p>We give you 6-10 Months warranty</p>
  </div>
</div>
           </div>
           <div className="mt-6">
           <textarea placeholder="write your comment here" className="textarea textarea-bordered textarea-lg w-full h-[30vh] " ></textarea>
           </div>
           <div className="mb-1">
            <Footer></Footer>
           </div>
        </div>
    );
};

export default RealmeCards;