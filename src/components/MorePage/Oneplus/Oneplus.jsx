import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import OnepluseCard from "../../SingleCards/OneplusCards/OnepluseCard";

const Onepluss = () => {
    const [data,setData]=useState(null)
    const products =useLoaderData()
    const {id} =useParams()
useEffect(() =>{
const  product = products.find(product => product._id==id)
  setData(product)
},[products,id]);
    return (
        <div>
          <OnepluseCard data={data}></OnepluseCard>
        </div>
    );
};

export default Onepluss;