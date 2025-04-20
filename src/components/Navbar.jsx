import { NavLink } from "react-router-dom";
// import image from "../shopping-cart-icon.jpg";//Initally i used this image but it 
//was normal image so bg color was white which was not looking good so i searched 
// "Ecommerce" transparent logo then i got below image
import image1 from "../icons8-e-commerce-100.png";
import {FaCartShopping} from "react-icons/fa6"; 
const Navbar = () => {
  // console.log("In Navbar");
  return (
    <div className="">
      <div className="flex items-center justify-between mx-auto h-24 flex-wrap lg:px-0 px-[2rem]  max-w-[56rem]">
        <NavLink to="/">
          <img src={image1} width="100px" className=""/>
        </NavLink>

        <div className="flex items-center gap-x-4 ">
          <NavLink to="/"><p className="text-white font-bold ">Home</p></NavLink>
          <NavLink to="/cart"> <FaCartShopping className="text-white hover:text-green-600 "/> </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
