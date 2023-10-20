import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import XiaomiCards from "../../SingleCards/XiaomiCards/XiaomiCards";

const Xiaomis = () => {
    const [data,setData]=useState(null)
    const products =useLoaderData()
    const {id} =useParams()
useEffect(() =>{
const  product = products.find(product => product._id==id)
  setData(product)
},[products,id]);
    return (
        <div>
           <XiaomiCards data={data}></XiaomiCards>
        </div>
    );
};

export default Xiaomis;