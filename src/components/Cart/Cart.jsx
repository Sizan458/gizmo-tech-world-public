import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";


const Cart = () => {
    const [order,setOrder] =useState([])
    const [noData ,setNoData] = useState('')
    useEffect(() => {
        const buy=JSON.parse(localStorage.getItem('productData'))
        setOrder(buy)
        if(buy){
            setOrder
        }else{
            setNoData('You Have Not Selected any Product')
        }
    },[])
    return (
        <div>
           <div>
            {
                noData ? <p className="text-2xl text-center mt-[10%] text-red-400">{noData}</p>:
                <div className="w-[96%] mx-auto grid grid-cols-1 gap-2 md:grid-cols-2 ">
                 {
                    order.map(product=>(<div className="hero mt-2 bg-base-200" key={[product._id]}>
                    <div className="hero-content flex-col lg:flex-row">
                      <img src={product.img} className=" rounded-lg shadow-xl md:h-[220px]" />
                      <div>
                        <div>
                            <p className="text-2xl">{product.name}</p>
                            <p className="text-2xl">price:{product.price}TK</p>
                        </div>
                       <div className="flex justify-end">
                       <btn className="text-2xl btn-error"><AiFillDelete></AiFillDelete></btn>
                       </div>
                      </div>
                    </div>
                  </div>))
                 }
                </div>
            }
           </div>
        </div>
    );
};

export default Cart;