import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import Spinner from "../Components/Spinner";

export const Products = () => {
  const [data, setData] = useState([]);
  const[loading,setLoading]=useState(true)
  useEffect(() => {
    getProducts();
  }, [data]);
  const getProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  if(loading){
    return(
        <div className="container mt-2" ><Spinner/></div>
    )
  }
  console.log(data);
  return (
    <>
      <div className="container">
        <div className="maindiv row ">
          {data.map((x) => {
            return (
              <>
                <div
                  style={{ marginTop: "40px" }}
                  className="col-lg-3 col-sm-12 col-md-6"
                >
                  <img src={x.image} className="image" alt="..." />
                  <h5 className="title mt-2">{x.title}</h5>
                  <p className="description">
                    {x.description.slice(0,100)}
                  </p>
                 <Link to={`/detail/${x.id}`}>
                 <button className="buttonDetailPage">Buy now</button>
                 </Link> 
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
