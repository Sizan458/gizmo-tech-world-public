import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import WaltonCard from "../../SingleCards/WaltonCard/WaltonCard";
const Waltons = () => {
    const [data,setData]=useState(null)
    const products =useLoaderData()
    const {id} =useParams()
useEffect(() =>{
const  product = products.find(product => product._id==id)
  setData(product)
},[products,id]);

    return (
        <div>
            <WaltonCard data={data}></WaltonCard>
        </div>
    );
};

export default Waltons;