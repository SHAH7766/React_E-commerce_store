import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Spinner from "../Components/Spinner";
import { useDispatch } from "react-redux";
import { AddToCart } from "../Redux/CartReducer";
import toast, { Toaster } from "react-hot-toast";
const DetailPage = () => {
  const dispatch = useDispatch()
  const params = useParams();
  const [data, setData] = useState({});
  const[loading,setLoading]=useState(true)

  useEffect(() => {
    getSingleProduct();
  }, []);

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${params.id}`
      );
      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  if(loading){
    return(
        <div className="container mt-4" ><Spinner/></div>
    )
  }

  return (
    <div className="container">
        
      <div className="maindiv row mt-5">
        <div className="col-lg-6">
          <img className="image" src={data.image} />
        </div>
        <div className="col-lg-6">
          <h5 className="title mt-2">{data.title}</h5>
          <p className="title mt-2">{data.description}</p>
          <p> $ {data.price}</p>
          <Link to="/cart">
            <button onClick={()=>dispatch(AddToCart(data))} className="buttonDetailPage">Add to Cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
