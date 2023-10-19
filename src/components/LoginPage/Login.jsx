import { useContext, useState } from "react";
import {  NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider/Auth";


const Login = () => {
  const[logError,setLogError]=useState('');
  const[success, setSuccess]=useState('');
  const [see,setSee]=useState(false);

  const{signIn}=useContext(AuthContext)
    const handleLogin=e=>{
        e.preventDefault();
        const form =e.target;
        const email = form.email.value;
        const  password=form.password.value;
        const user ={email,password};
        //reset error message & success message
        setLogError('');
        setSuccess('');
        //sign in the user with the email and password
        signIn(email,password)
        .then(result=>{console.log(result)
          setSuccess('Successfully login ');
        })
        .catch(err=>{setLogError(err.message)});

    }
    return (
        <div className=" mt-2 mx-4 md:mx-10 lg:mx-20">
            <div className="hero  h-[80vh]" style={{backgroundImage: 'url(https://i.ibb.co/y6p74rF/R-1.png)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
   <form  onSubmit={handleLogin}>
  
   <div className="form-control w-full ">
  <label className="label">
    <span className="label-text text-xl text-black">Email</span>
    
  </label>
  <input type="email"  name="email" className="input input-bordered w-full  md:w-[500px] lg:w-[700px]" required />
  
</div>
   <div className="form-control w-full ">
  <label className="label">
    <span className="label-text text-xl text-black">Password</span>
    
  </label>
  <input type={see? "text" : "password"} name="password" className="input input-bordered w-full  md:w-[500px] lg:w-[700px]" required />
  <span className="text-right text-blue-500" onClick={()=>setSee(!see)}>
    Show password 
  </span>
  
</div>
<button className="btn btn-outline btn-info mt-4 mb-3 w-full  md:w-[500px] lg:w-[700px]">Login</button>
<div>
  {
    logError && <p className="text-red-700 text-center text-2xl">{logError}</p>
  }
  {
   success &&  <p className="text-green-700 text-center text-2xl">{success}</p>
  }
</div>
<div className="mt-4  text-white text-2xl text-center">
<p>Do not have an account <NavLink to='/register' className="text-rose-700">Register</NavLink></p>
</div>
   </form>


</div>
        </div>
    );
};

export default Login;