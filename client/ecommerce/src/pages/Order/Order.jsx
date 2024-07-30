import React from "react";
import "./Order.scss";

export const Order = () => {
  return (
    <div className='order'>
      <h1>Your Orders</h1>
      <div className='container'>
        <div className='item'>
          <div className='image'>
            <img src='/img/payment.png' alt='' />
          </div>
          <div className='desc'>
            <p className='status'>Delivered on 28 Jul 2024</p>
            <p className='title'>Full Metal Jacket</p>
          </div>
          <button> {">"}</button>
        </div>
      </div>
    </div>
  );
};
