import { useEffect, useState } from "react";
import Product from "../components/Product";
import { Spinner } from "../components/Spinner";
const API_URL = "https://fakestoreapi.com/products";

const Home = () => {
  console.log("HEllo");
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  async function fetchData() {
    setLoading(true);
    try {
      const data = await fetch(API_URL);
      const response = await data.json();
      console.log("Prting data:", response);
      setProducts(response);
    }
    catch (e) {
      console.log("Products not found");
    }
    setLoading(false);
  }

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
              products.map((data) => (
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
