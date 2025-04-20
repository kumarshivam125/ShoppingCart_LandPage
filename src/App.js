import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Toaster } from "react-hot-toast";
const App = () => {
  // console.log("In app.js");
  return (
    <div>
      <div className="bg-slate-900 ">
        <Navbar/>
      </div>      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Toaster/>
    </div>
  );
};

export default App;
