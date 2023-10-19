import {  NavLink } from "react-router-dom";

const Login = () => {
    return (
        <div className=" mt-2 mx-4 md:mx-10 lg:mx-20">
            <div className="hero  h-[80vh]" style={{backgroundImage: 'url(https://i.ibb.co/y6p74rF/R-1.png)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
   <form >
  
   <div className="form-control w-full ">
  <label className="label">
    <span className="label-text text-xl text-black">Email</span>
    
  </label>
  <input type="text"  name="email" className="input input-bordered w-full  md:w-[500px] lg:w-[700px]" />
  
</div>
   <div className="form-control w-full ">
  <label className="label">
    <span className="label-text text-xl text-black">Password</span>
    
  </label>
  <input type="text"  name="password" className="input input-bordered w-full  md:w-[500px] lg:w-[700px]" />
  
</div>
<button className="btn btn-outline btn-info mt-4 mb-3 w-full  md:w-[500px] lg:w-[700px]">Login</button>
<div className="mt-4  text-white text-2xl text-center">
<p>Do not have an account <NavLink to='/register' className="text-rose-700">Register</NavLink></p>
</div>
   </form>


</div>
        </div>
    );
};

export default Login;