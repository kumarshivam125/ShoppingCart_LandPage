import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
const Cart = () => {
  const { cart, catalog } = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalItem,setTotalItems]=useState(0);
  useEffect(() => {
    if (cart.length > 0)
      setTotalAmount(cart?.reduce((accumalated, curr) => accumalated + curr.qty * curr.price, 0));
    setTotalItems(cart?.reduce((tot,curr)=>tot+curr.qty,0));
  }, [cart, catalog]) //Whenever we add or remove any item from/to "cart"  
  useEffect(() => {
    console.log("IN CART PAGE--CART-", cart)
  }, [cart])
  useEffect(() => {
    console.log("IN CART PAGE--CATALOG-", catalog)
  }, [catalog])
  return (
    <div className="max-w-[56rem] flex sm:justify-center  md:justify-between flex-wrap mx-auto ">
      {
        cart.length > 0 ?
          (
            <div className="flex my-[3rem] flex-wrap justify-between mx-auto">
              <div className="flex flex-col max-w-[65%]">
                {
                  cart.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))
                }
              </div>
              <div className="flex flex-col justify-between ml-[20%] md:ml-0">
                <div>
                  <div className="uppercase font-semibold text-[1.5rem]   text-green-500 ">Your Cart</div>
                  <div className="uppercase font-bold  text-[3rem]   text-green-500 ">Summary</div>
                  <p className="font-semibold text-[1.2rem] text-gray-600 ">Total Items:{totalItem}</p>
                </div>
                <div>
                  <p className="font-semibold text-[1.2rem] text-gray-600">Total Amount:
                    <span className="text-black font-extrabold  ">${totalAmount.toFixed(2)}</span>
                  </p>
                  <button className="bg-green-500 rounded-md  px-20 py-1 text-white font-bold  ">Checkout Now</button>
                </div>
              </div>
            </div>

          ) :
          (
            <div className="h-screen w-screen flex flex-col  items-center justify-center gap-y-4 ">
              <h1 className="font-bold text-gray-700 text-2xl">Cart Empty!</h1>
              <Link to="/"><button className="text-white text-[15px] px-7 py-2 
                 rounded-md font-semibold uppercase bg-green-500">Shop Now</button></Link>
            </div>
          )
      }
    </div>
  );
};

export default Cart;
