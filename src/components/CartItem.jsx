import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { decrement, increment, remove, removeFromCart } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useEffect } from "react";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  function removeHandler() {
    dispatch(removeFromCart(item.id));
    toast.success("Item Removed");
  }

  return (
    <div>
      <div className="flex mx-auto mb-8 pb-4 border-b-2 w-full border-gray-600 ml-[20%]  md:ml-0">
        <div>
          <img src={item.image} width="150px" />
        </div>
        <div className="ml-8 flex flex-col gap-y-4">
          <h1 className="font-extrabold text-[1.3rem] text-gray-800">{item.title.substr(0, 38)}</h1>
          <p className="font-semibold text-gray-500">{item.description.substr(0, 70)}</p>
          <div className="flex justify-between mx-1">
            <p className="text-green-600 font-extrabold">${item.price}</p>
            <button onClick={removeHandler} className="bg-red-200 p-3 rounded-full text-red-700 text-xl"><MdDelete /></button>
          </div>
          <div>
            <div className="flex gap-x-4 bg-gray-100 px-3 py-2 rounded-lg w-[25%]">
              {
                item.qty == 1 ? <button className="text-red-500" onClick={() => dispatch(removeFromCart(item.id))}><MdDelete /></button> :
                  <button onClick={() => dispatch(decrement(item.id))}><FaMinus /></button>
              }
              <p className="text-green-500 font-extrabold ">{item.qty}</p>
              <button onClick={() => dispatch(increment(item.id))}><FaPlus /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CartItem;
