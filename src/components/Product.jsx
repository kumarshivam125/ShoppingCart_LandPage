import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";
const Product = ({product}) => {
  const cartArr=useSelector((state)=>state.cart);
  const dispatch=useDispatch();
  // console.log("In product :",cart);
  const addToCart=()=>{
    dispatch(add(product));
    toast.success("Added to cart");
  }
  const removeFromCart=()=>{
    dispatch(remove(product.id));
    toast.error("Removed from cart");
  }
  return  (

     <div className="flex flex-col max-w-[18rem] shadow-xl  border-2 rounded-xl justify-between pt-4 
     hover:scale-105   hover:shadow-2xl hover:shadow-black transition-all  duration-300 bg-white ">  
        <div className="">
          <p className="font-extrabold text-[1.5rem] text-center">{product.title.substr(0,11)}...</p>
          <div className="px-12 py-4 ">
            <p className="font-semibold text-[15px]  text-gray-400">{product.description.substr(0,40)}...</p>
            <div className="h-[230px]">
              <img src={product.image} className="pt-4 w-full h-full" />
            </div>
          </div>
        </div>
        <div className="flex justify-between px-3 pb-3 items-center "> 
          <p className="text-green-500 font-extrabold ">${product.price}</p>
          {
            cartArr.some((p)=>p.id==product.id)?
            <button onClick={removeFromCart} className="uppercase font-extrabold text-gray-700  border-2
            border-gray-700  
            px-2 py-1 rounded-full hover:text-white hover:font-extrabold 
            hover:bg-gray-700 transition-all duration-200">Remove item</button>:
            <button onClick={addToCart} className="uppercase font-extrabold  text-gray-700  border-2
             border-gray-700 px-6 py-1 rounded-full hover:text-white hover:font-extrabold 
            hover:bg-gray-700 transition-all duration-200">Add item</button>
          }
        </div>
     </div>
  );
};

export default Product;