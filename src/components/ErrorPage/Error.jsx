import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="flex justify-center mt-[10%]">
            <div className="card w-[450px] glass">
  <figure><img src="https://i.ibb.co/rdXxFT4/404-page-not-found.png" className=""/></figure>
  <div className="card-body">
   
    <div className="card-actions justify-center">
      <Link to='/'>
      <button className="btn  btn-ghost w-full font-semibold">Go To Home</button>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Error;