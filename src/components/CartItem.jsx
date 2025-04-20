import {MdDelete} from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";
const CartItem = ({item}) => {
  const dispatch=useDispatch();
  function removeFromCart(){
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }
  return (
    <div>
      <div className="flex mx-auto mb-8 pb-4 border-b-2 w-full border-gray-600 ml-[20%]  md:ml-0">
          <div>
            <img src={item.image} width="150px"/>
          </div>
          <div className="ml-8 flex flex-col gap-y-4">
            <h1 className="font-extrabold text-[1.3rem] text-gray-800">{item.title.substr(0,38)}</h1>
            <p className="font-semibold text-gray-500">{item.description.substr(0,70)}</p>
            <div className="flex justify-between mx-1">
              <p className="text-green-600 font-extrabold">${item.price}</p>
              <button onClick={removeFromCart} className="bg-red-200 p-3 rounded-full text-red-700 text-xl"><MdDelete/></button>
            </div>
          </div>
      </div>
    </div>
  )
};

export default CartItem;
