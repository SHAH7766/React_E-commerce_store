import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DecrementQuantity,
  GetTotalCart,
  IncermentQuantity,
  RemoveCart,
} from "../Redux/CartReducer";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const { Cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.name
  );
  useEffect(() => {
    dispatch(GetTotalCart());
  }, [Cart]);
  return (
    <>
      <div className="container">
        <div className="maindiv row">
          <div className="col-lg-10 col-sm-12 col-md-4 mt-4">
            {Cart.map((x) => {
              return (
                <>
                  <img src={x.image} className="image mt-5" alt="..." />
                  <div className="card-body">
                    <h5 className="title mt-2">{x.title}</h5>
                    <h5 className="title mt-2">$ {x.price}</h5>
                    <>
                      <button
                        className="increment"
                        onClick={() => dispatch(IncermentQuantity(x))}
                      >
                        +
                      </button>
                      <span className="mx-2">{x.quantity}</span>
                      <button
                        className="decrement"
                        onClick={() => dispatch(DecrementQuantity(x))}
                      >
                        -
                      </button>
                      <button
                        className="delete"
                        onClick={() => dispatch(RemoveCart(x))}
                      >
                        <i class="fa-solid fa-trash"></i>
                      </button>
                    </>
                  </div>
                </>
              );
            })}
          </div>
          <div className="col-lg-2 col-sm-12 col-md-4 mt-5">
            <div className="checkOut">
              <h4>Cart Summary</h4>
              <p>Total Items : {totalQuantity}</p>
              <p>Total Price : $ {totalPrice}</p>
            </div>
          </div>
          <Link className="mt-5 text-decoration-none" to='/pro'>Return to shop</Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
