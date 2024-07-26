import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";
export default function Card({ item }) {
  return (
    <Link to={`/product/${item.id}`}>
      <div className='card'>
        <div className='image'>
          {item.attributes?.isNew && <span>New Season</span>}
          <img
            src={
              import.meta.env.VITE_UPLOAD_URL +
              item.attributes?.img.data.attributes.url
            }
            alt=''
            className='mainImg'
          />
          <img
            src={
              import.meta.env.VITE_UPLOAD_URL +
              item.attributes?.img2.data.attributes.url
            }
            alt=''
            className='secondImg'
          />
        </div>

        <h2 className='title'>{item.attributes?.title}</h2>
        <div className='price'>
          <h3 className='oldPrice'>&#8377;{item.attributes?.oldPrice}</h3>
          <h3>&#8377;{item.attributes?.price}</h3>
        </div>
      </div>
    </Link>
  );
}
