import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SamsungCards from "../../SingleCards/SamsungCards/SamsungCards";

const Samsungs = () => {
    const [data,setData]=useState(null)
    const products =useLoaderData()
    const {id} =useParams()
useEffect(() =>{
const  product = products.find(product => product._id==id)
  setData(product)
},[products,id]);
    return (
        <div>
          <SamsungCards data={data}></SamsungCards>
        </div>
    );
};

export default Samsungs;