import React from "react";
import { perfumes } from "../Data";
import SinglePerfume from "./SinglePerfume";
import { useContext } from "react";
import { CartContext } from "../Context";
// import Cart from './Cart'

const AllPerfumes = () => {
  const {cart}=useContext(CartContext)
  return (
    <div className="d-flex flex-wrap gap-3">
      {perfumes.map((perfume) => {
        const inCart = cart.some ((cartItem) => cartItem.id === perfume.id) 
        return <SinglePerfume key={perfume.id} {...perfume} inCart={inCart} />;
      })}
    </div>
  );
};

export default AllPerfumes;