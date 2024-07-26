import React, { useEffect, useState } from "react";
import { app } from "../../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn, signOut } from "../../redux/userReducer";
import { FcGoogle } from "react-icons/fc";
import "./Register.scss";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userState) => {
      console.log(userState);

      if (userState) {
        dispatch(
          signIn({
            displayName: userState?.displayName,
            email: userState.email,
            photoUrl: userState?.photoURL,
          }),
        );
        navigate("/");
      } else {
        dispatch(signOut());
      }
    });

    return () => unsubscribe();
  }, []);

  const createNewUserByEmailAndPassowrd = async (event) => {
    event.preventDefault();
    try {
      const value = await createUserWithEmailAndPassword(auth, email, password);
      console.log(value);
      toast.success("Successfuly created new account");
    } catch (error) {
      toast.error("Somthing went wrong!");
      console.log(error.code);
    }
  };

  const signUpWithGoogle = (event) => {
    event.preventDefault();
    signInWithPopup(auth, googleProvider);
  };

  return (
    <div className='container register'>
      <h2>Create New Account</h2>
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
        <button
          type='submit'
          className='submit'
          onClick={createNewUserByEmailAndPassowrd}
        >
          Register
        </button>
        <button onClick={signUpWithGoogle}>
          <FcGoogle size={20} /> <span>Signin with Google</span>
        </button>

        <Link to='/login'>
          <p>already have an account</p>
        </Link>
      </form>
    </div>
  );
};

export default Register;
