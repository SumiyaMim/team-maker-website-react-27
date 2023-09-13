/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import './Cart.css'

const Cart = ({ selectedActors, totalCost, remaining }) => {
  // console.log(selectedActors);
  return (
    <div>
        <div className="total-length">
            <h3>Total Actors: {selectedActors.length}</h3>
            <h3>Budget: 20000 $</h3>
            <h3>Total Cost: {totalCost} $</h3>
            <h3>Remaining: {remaining} $</h3>
        </div>
        {selectedActors.map((actor, idx) => (
        <h4 key={idx}>{actor.name}</h4>
      ))}
    </div>
  );
};

export default Cart;
