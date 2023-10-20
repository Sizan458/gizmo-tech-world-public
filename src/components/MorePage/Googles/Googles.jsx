import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import GoogleCard from "../../SingleCards/GoogleCards/GoogleCard";


const Googles = () => {
    const [data,setData]=useState(null)
    const products =useLoaderData()
    const {id} =useParams()
useEffect(() =>{
const  product = products.find(product => product._id==id)
  setData(product)
},[products,id]);

   
    return (
        <div>
            <GoogleCard data={data}></GoogleCard>
        </div>
    );
};

export default Googles;