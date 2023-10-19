import { useContext } from "react";
import {  NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider/Auth";




const Register = () => {
  const{userEmail}=useContext(AuthContext);
  const handleRegister =e =>{
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    const user ={name, email, password}
    console.log(user);
    //email & password  register
    userEmail(email, password)
    .then(result =>{console.log(result)})
    .catch(err =>{console.log(err)});
    
   }
  return (
    <div className=" mt-2 mx-4 md:mx-10 lg:mx-20">
        <div className="hero  h-[80vh]" style={{backgroundImage: 'url(https://i.ibb.co/mthkD0w/R-9.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
   <form onSubmit={handleRegister} >
   <div className="form-control w-full ">
  <label className="label">
    <span className="label-text text-xl text-black">Name</span>
    
  </label>
  <input type="text"  name="name" className="input input-bordered w-full  md:w-[500px] lg:w-[700px]"required />
  
</div>
   <div className="form-control w-full ">
  <label className="label">
    <span className="label-text text-xl text-black">Email</span>
    
  </label>
  <input type="email"  name="email" className="input input-bordered w-full  md:w-[500px] lg:w-[700px]"required />
  
</div>
   <div className="form-control w-full ">
  <label className="label">
    <span className="label-text text-xl text-black">Password</span>
    
  </label>
  <input type="password"  name="password" className="input input-bordered w-full  md:w-[500px] lg:w-[700px]" required />
  
</div>
<button className="btn btn-outline btn-success mt-4 mb-3 w-full  md:w-[500px] lg:w-[700px]">Register</button>
<div className="mt-4  text-white text-2xl text-center">
<p>Already have an account <NavLink to='/login' className="text-pink-700">Login</NavLink></p>
</div>
   </form>


</div>
        </div>

  );
};

export default Register;