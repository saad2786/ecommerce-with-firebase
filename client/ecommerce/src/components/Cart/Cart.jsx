import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { loadStripe } from '@stripe/stripe-js'
import { useDispatch, useSelector } from 'react-redux'
import './Cart.scss'
import { removeItem, resetCart } from '../../redux/cartReducer'
import { makeRequest } from '../../makeRequest'
export default function Cart() {
  const data = useSelector((state) => state.cart.products)
  const dispatch = useDispatch()
  const total = data.reduce(
    (acc, cur) => acc + cur.quantity * parseInt(cur.price),
    0,
  )
  const stripePromise = loadStripe(
    'pk_test_51OP986SAlpsqJH6IjCiZstA0cgFkk93IEh8oxLC8alPAkPJ0t6fYTh3TMwXBigfOyiTIcTTdX1ZW1p6ZQH5J8lhk00XpxIZtNf',
  )
  async function handlePayment() {
    try {
      const stripe = await stripePromise
      const res = await makeRequest.post('/orders', data)
      console.log(res)
      const dat = await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="cart">
      <h2>Product in your cart</h2>
      {data.map((item) => {
        return (
          <div className="item" key={item.id}>
            <img src={import.meta.env.VITE_UPLOAD_URL + item.img} alt="" />
            <div className="details">
              <h3>{item.title}</h3>
              <p>{item.desc.substring(0, 100)}</p>
              <h3 className="price">
                {item.quantity}x ${item.price}
              </h3>
            </div>
            <div
              className="deleteItem"
              onClick={() => {
                dispatch(
                  removeItem({
                    id: item.id,
                  }),
                )
              }}
            >
              <DeleteOutlineIcon />
            </div>
          </div>
        )
      })}
      <div className="total">
        <div className="subTotal">
          <h3>SUBTOTAL</h3>
          <h3>${total}</h3>
        </div>
        <button onClick={handlePayment}>Proceeed to checkout</button>
        <span
          onClick={() => {
            dispatch(resetCart())
          }}
        >
          Reset Cart
        </span>
      </div>
    </div>
  )
}
