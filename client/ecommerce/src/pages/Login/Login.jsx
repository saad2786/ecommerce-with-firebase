import React, { useEffect, useState } from "react";
import { app } from "../../firebase";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import toast from "react-hot-toast";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn, signOut } from "../../redux/userReducer";
import { FcGoogle } from "react-icons/fc";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userState) => {
      console.log(userState);

      if (userState) {
        dispatch(
          signIn({
            displayName: userState.displayName,
            email: userState.email,
            photoUrl: userState.photoURL,
          }),
        );
        toast.success("Successfully logged in");
        navigate("/");
      } else {
        dispatch(signOut());
      }
    });

    return () => unsubscribe();
  }, []);

  const loginAccount = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password);
  };
  const signUpWithGoogle = (event) => {
    event.preventDefault();
    signInWithPopup(auth, googleProvider);
  };
  return (
    <div className='container login'>
      <h2>Login Account</h2>
      <form>
        <div className='item'>
          <label htmlFor=''>Email</label>
          <input
            type='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='item'>
          <label htmlFor=''>Password</label>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <button type='submit' className='submit' onClick={loginAccount}>
          Login
        </button>
        <button onClick={signUpWithGoogle}>
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
