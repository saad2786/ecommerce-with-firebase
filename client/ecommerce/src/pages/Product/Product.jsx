import React from "react";
import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import "./Product.scss";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import toast from "react-hot-toast";

export default function Product() {
  const cartId = useParams().id;
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState("img");

  const { products, loading } = useFetch(`/products/${cartId}?populate=*`);
  console.log(products);
  function increaseQuantity() {
    setQuantity((prev) => prev + 1);
  }
  function decreaseQuantity() {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  }
  console.log(products?.attributes?.img?.data?.attributes?.url);
  return (
    <div className='product'>
      {loading ? (
        "loading"
      ) : (
        <>
          <div className='left'>
            <div className='images'>
              <img
                src={
                  import.meta.env.VITE_UPLOAD_URL +
                  products?.attributes?.img?.data?.attributes?.url
                }
                alt=''
                onClick={() => setSelected("img")}
              />
              <img
                src={
                  import.meta.env.VITE_UPLOAD_URL +
                  products?.attributes?.img2?.data?.attributes?.url
                }
                alt=''
                onClick={() => setSelected("img2")}
              />
            </div>
            <div className='mainImg'>
              <img
                src={
                  import.meta.env.VITE_UPLOAD_URL +
                  products?.attributes[selected]?.data?.attributes?.url
                }
                alt=''
              />
            </div>
          </div>
          <div className='right'>
            <h1>{products?.attributes?.title}</h1>
            <h2>&#8377;{products?.attributes?.price}</h2>
            <p className='desc'>{products?.attributes?.desc}</p>
            <div className='quantity'>
              <button onClick={decreaseQuantity}>-</button>
              <span>{quantity < 1 ? 1 : quantity}</span>
              <button onClick={increaseQuantity}>+</button>
            </div>
            <button
              className='addToCart'
              onClick={() => {
                const audio = new Audio("/audio/notify.mp3");
                dispatch(
                  addToCart({
                    id: products.id,
                    title: products.attributes.title,
                    quantity,
                    desc: products.attributes.desc,
                    price: products.attributes.price,
                    img: products.attributes.img.data.attributes.url,
                  }),
                );
                audio.play();
                toast.success("Added to cart");
              }}
            >
              <AddShoppingCartIcon className='icon' />
              ADD TO CART
            </button>
            <div className='wishListButtons'>
              <span>
                <FavoriteBorderIcon className='icon' />
                Add to wishlist
              </span>
              <span>
                <CompareArrowsIcon className='icon' />
                Add to Compare
              </span>
            </div>
            <div className='features'>
              <p>Vender: Polo</p>
              <p>Product Type: Jacket</p>
              <p>Tag: Jack</p>
            </div>
            <hr />
            <div className='info'>
              <p>Description </p>
              <hr />
              <p>Additional Information </p>
              <hr />
              <p>FAQ</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
