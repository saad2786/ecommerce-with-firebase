import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { FcGoogle } from "react-icons/fc";
import { login } from "../../redux/authReducer";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, user } = useSelector((state) => state.auth);
  console.log(user);

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(login({ identifier: email, password }));
    navigate("/");
  };
  return (
    <div className='container login'>
      <h2>Login Account</h2>
      <form onSubmit={onSubmit}>
        <div className='item'>
          <label htmlFor=''>Email</label>
          <input
            type='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='item'>
          <label htmlFor=''>Password</label>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <br />
        <button type='submit' className='submit'>
          {loading ? "...Loading" : "Login"}
        </button>
        <button>
          <FcGoogle size={20} /> <span>Signin with Google</span>
        </button>
        <Link to='/register'>
          <p>create account?</p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
