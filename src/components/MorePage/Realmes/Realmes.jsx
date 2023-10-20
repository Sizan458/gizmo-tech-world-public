import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import RealmeCards from "../../SingleCards/RealmeCards/RealmeCards";
const Realmes = () => {
    const [data,setData]=useState(null)
    const products =useLoaderData()
    const {id} =useParams()
useEffect(() =>{
const  product = products.find(product => product._id==id)
  setData(product)
},[products,id]);
    return (
        <div>
            <RealmeCards data={data}></RealmeCards>
        </div>
    );
};

export default Realmes;