import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signOut } from "../../redux/userReducer";
import { FcGoogle } from "react-icons/fc";
import "./Register.scss";
import { makeRequest } from "../../makeRequest";
import { register } from "../../redux/authReducer";

const Register = () => {
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(register({ username, email, password }));
    navigate("/");
  };

  return (
    <div className='container register'>
      <h2>Create New Account</h2>
      <form onSubmit={onSubmit}>
        <div className='item'>
          <label htmlFor=''>Email</label>
          <input
            type='email'
            required
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='item'>
          <label htmlFor=''>Username</label>
          <input
            type='text'
            placeholder='Enter your username'
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='item'>
          <label htmlFor=''>Password</label>
          <input
            type='password'
            placeholder='Password'
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <button type='submit' className='submit' disabled={loading}>
          {loading ? "...Loading" : "Register"}
        </button>
        <button>
          <FcGoogle size={20} /> <span>Signin with Google</span>
        </button>

        <Link to='/login'>
          <p>already have an account</p>
        </Link>
      </form>
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default Register;
