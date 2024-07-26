import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.scss";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { makeRequest } from "../../makeRequest";
import toast from "react-hot-toast";

export default function Cart() {
  const data = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const total = data.reduce(
    (acc, cur) => acc + cur.quantity * parseInt(cur.price),
    0,
  );

  async function handlePayment(e) {
    if (total === 0) {
      toast.error("Add product to cart");
      return;
    }
    try {
      const paymentRes = await makeRequest.post("/order/payment", {
        products: data,
      });

      const {
        orderId,
        currency,
        totalAmount: amount,
        receipt,
      } = paymentRes.data;

      var options = {
        key: "rzp_test_tnqBjO1XhgyhzC", // Enter the Key ID generated from the Dashboard
        amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency,
        name: "Saad Patil", //your business name
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: async function (response) {
          const body = {
            ...response,
            products: data,
            orderDetails: {
              currency,
              totalAmount: amount,
              orderId,
              receipt,
            },
          };

          try {
            const res = await makeRequest.post(`/orders`, body);
            const jsonRes = await res.data;
            console.log(jsonRes);
            toast.success("Your order placed successfully");
          } catch (error) {
            console.log(error);
          }
        },
        prefill: {
          //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
          name: "Gaurav Kumar", //your customer's name
          email: "gaurav.kumar@example.com",
          contact: "9000090000", //Provide the customer's phone number for better conversion rates
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3FA2F6",
        },
      };
      var rzp1 = new window.Razorpay(options);
      rzp1.on("payment.failed", function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });

      rzp1.open();
      e.preventDefault();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='cart'>
      <h2>Product in your cart</h2>
      {data.map((item) => {
        return (
          <div className='item' key={item.id}>
            <img src={import.meta.env.VITE_UPLOAD_URL + item.img} alt='' />
            <div className='details'>
              <h3>{item.title}</h3>
              <p>{item.desc.substring(0, 100)}</p>
              <h3 className='price'>
                {item.quantity}x &#8377;{item.price}
              </h3>
            </div>
            <div
              className='deleteItem'
              onClick={() => {
                dispatch(
                  removeItem({
                    id: item.id,
                  }),
                );
              }}
            >
              <DeleteOutlineIcon />
            </div>
          </div>
        );
      })}
      <div className='total'>
        <div className='subTotal'>
          <h3>SUBTOTAL</h3>
          <h3>&#8377;{total}</h3>
        </div>
        <button onClick={handlePayment}>Proceeed to checkout</button>
        {/* <PaymentButton>Proceeed to checkout</PaymentButton> */}
        <span
          onClick={() => {
            dispatch(resetCart());
          }}
        >
          Reset Cart
        </span>
      </div>
    </div>
  );
}
