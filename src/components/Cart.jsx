import React from 'react'
import { useState } from 'react';
import {perfumes} from "../Data"
import SinglePerfume from './SinglePerfume';

function Cart ({id,title,image,rating,price,oldPrice,itemsLeft}){

  const [num, setNum] = useState(0);
  const handleDecreaseNum = () => {
    setNum(num - 1);
  };
  const handleIncreaseNum = () => {
    setNum(num + 1);
  };
  
  const removeItem = (itemId) => {
    const remainingProducts = Cart.filter((cartItem) => cartItem.id !== itemId);
    setCart(remainingProducts);
  };
  return (
    <div
      style={{ border: "1px solid #D0D0D0", width: "350px" }}
      className="container py-4 mt-5 mt-lg-0 "
    >
      <h4 className="fw-bold">My Cart Preview</h4>
      <div className="d-flex flex-column pt-3" style={{ width: "300px" }}>
        {perfumes.slice(0, 3).map((perfume) => {
          return (
            <div className="d-flex gap-3 py-4">
              <div>
                <img
                  style={{ width: "95px", height: "110px" }}
                  src={perfume.image}
                  alt={perfume.title}
                />
              </div>
              <div style={{ height: "98px", width:"180px"}}>
                <p>{perfume.title}</p>
                <div className="d-flex gap-1">
                  <button onClick={handleDecreaseNum}
                    style={{ backgroundColor: "#D2D2D2", width: "19px" }}
                    className="main-color-bg text-white border-0 rounded-1 h-25"
                  >
                    -
                  </button>
                  <p>0</p>
                  <button onClick={handleIncreaseNum} className="main-color-bg text-white border-0 rounded-1 h-25">
                    +
                  </button>
                </div>
                <div className="d-flex gap-5">
                  <p className="pt-3">N{perfume.price}</p>
                  <button onClick={removeItem} className="rounded-2 text-danger border-danger bg-transparent h-25 mt-2 w-50">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="d-flex flex-column pt-5">
        <div className="d-flex justify-content-between">
          <p>Sub Total</p>
          <p>#0.00</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>Delivery</p>
          <p>#0.00</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>Total</p>
          <p>#0.00</p>
        </div>
      </div>
      <button
        style={{ height: "40px" }}
        className="w-100 rounded-2 main-color-bg text-white border-0"
      >
        Confirm Order
      </button>
    </div>
  );
};

export default Cart