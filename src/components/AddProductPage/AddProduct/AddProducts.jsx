import Footer from "../../Footer/Footer";


const AddProducts = () => {
  
    

    return (
        <div className="mx-1  mt-3">
            <div className="hero  h-full rounded-lg" style={{backgroundImage: 'url(https://i.ibb.co/3S0ZYYY/shutterstock-1024468816.webp)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
    <from  >
    <div className="form-control w-full ">
  <label className="label">
    <span className="label-text text-xl text-black">Images</span>
    
  </label>
  <input type="text" placeholder="Img Url" name="img" className="input input-bordered w-full  md:w-[500px] lg:w-[700px]" />
  
</div>
    <div className="form-control w-full ">
  <label className="label">
    <span className="label-text text-xl text-black">Type </span>
    
  </label>
  <select  name="type"  id="type" className="select select-bordered w-full  md:w-[500px] lg:w-[700px]">
  <option disabled selected   >Product Type</option>
  <option>Mobile</option>
  <option>Tablet</option>
  <option>Laptop</option>
  <option>Desktop</option>
  <option>Others</option>
</select>
  
</div>
    <div className="form-control w-full ">
  <label className="label">
    <span className="label-text text-xl text-black">Name</span>
    
  </label>
  <input type="text" placeholder="Device Name" name="name" className="input input-bordered w-full " />
  
</div>
    <div className="form-control w-full ">
  <label className="label">
    <span className="label-text text-xl text-black">Brand Name</span>
    
  </label>
  <input type="text" placeholder="Brand Name" name="brand" className="input input-bordered w-full " />
  
</div>
    <div className="form-control w-full ">
  <label className="label">
    <span className="label-text text-xl text-black">Price</span>
    
  </label>
  <input type="text" placeholder="Price" name="price" className="input input-bordered w-full " />
  
</div>
    <div className="form-control w-full ">
  <label className="label">
    <span className="label-text text-xl text-black">Description</span>
    
  </label>
  <input type="text-area" placeholder="Short description" name="description" className="input input-bordered w-full " />
  
</div>
    <div className="form-control w-full ">
  <label className="label">
    <span className="label-text text-xl text-black">Rating</span>
    
  </label>
  <input type="text-area" placeholder="Give your rating" name="rating" className="input input-bordered w-full " />
  
</div>
<button className="btn btn-outline btn-accent mt-4 mb-3 w-full  md:w-[500px] lg:w-[700px]">Add</button>
    </from>
</div>
<div>
    <Footer className="mt-3"></Footer>
</div>
        </div>
    );
};

export default AddProducts;