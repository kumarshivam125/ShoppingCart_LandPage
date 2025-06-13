import { useEffect, useState } from "react";
import Product from "../components/Product";
import { Spinner } from "../components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { setCatalog } from "../redux/Slices/CartSlice";
const API_URL = "https://fakestoreapi.com/products";

const Home = () => {
  const dispatch=useDispatch();
  const {catalog,cart}=useSelector(state=>state.cart);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  async function fetchData() {
    if(catalog.length>0) return; 
    
    setLoading(true);
    try {
      const data = await fetch(API_URL);
      const response = await data.json();
      // console.log("Prting data:", response);
      // setProducts(response);
      const newData=response.map(x=>({...x,qty:0}));
      dispatch(setCatalog(newData));
      // console.log("AFTER Mapping",newData);
    }
    catch (e) {
      console.log("Products not found");
    }
    setLoading(false);
  }
  useEffect(()=>{
    console.log("IN HOME PAGE--CART-",cart)
  },[cart])
  useEffect(()=>{
    console.log("IN HOME PAGE--CATALOG-",catalog)
  },[catalog])
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div className="">
      {
        loading ? (<Spinner />)
          :
          (<div className="flex max-w-[60rem] flex-wrap mx-auto justify-center gap-x-4 my-[3rem] gap-y-4">
            {
                catalog.map((data) => (
                <Product key={data.id} product={data} />
              ))
            }
          </div>
          )
      }
    </div>
  );
};

export default Home;
