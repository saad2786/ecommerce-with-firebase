import React, { useEffect, useState } from "react";
import "./NavBar.scss";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link, useNavigate } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import { getAuth, signOut } from "firebase/auth";
import { signOut as signOutFromRedux } from "../../redux/userReducer";
import { app } from "../../firebase";

const auth = getAuth(app);
export default function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.cart.products);
  const { photoUrl } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  useEffect(() => {
    const handleClick = () => {
      setOpenProfile(false);
      setOpen(false);
    };

    // Add event listener to window
    window.addEventListener("click", handleClick);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(signOutFromRedux());
      navigate("/login");
    });
  };
  // Stop propagation to prevent window click event from closing the dropdown when clicking inside the component
  const handleCartComponentClick = (event) => {
    event.stopPropagation();
    setOpen(!open);
  };
  const handleMenuComponentClick = (event) => {
    event.stopPropagation();
    setOpenProfile(!openProfile);
  };

  return (
    <div className='navBar'>
      <div className='wrapper'>
        <div className='left'>
          {/* <div className='item'>
            <span>Flags</span>
            <KeyboardArrowDownOutlinedIcon />
          </div>
          <div className='item'>
            <span>USD</span>
            <KeyboardArrowDownOutlinedIcon />
          </div> */}
          <div className='item'>
            <Link to='products/2 '>Women</Link>
          </div>
          <div className='item'>
            <Link to='products/1'>Men</Link>
          </div>
          <div className='item'>
            <Link to='products/3'>Children</Link>
          </div>
          <div className='item'>
            <Link to='products/4'>Accessories</Link>
          </div>
        </div>
        <div className='center'>
          <h2>
            <Link to='/'>
              <span>sp</span> Store
            </Link>
          </h2>
        </div>
        <div className='right'>
          <div className='item'>Home</div>

          <div className='item'>Order</div>
          <div className='icons'>
            <FavoriteBorderOutlinedIcon />
            <div className='cartIcon' onClick={handleCartComponentClick}>
              <ShoppingCartOutlinedIcon />
              <span>{data.length}</span>
            </div>
            {/* <PersonOutlineIcon /> */}
          </div>
          {photoUrl ? (
            <div className='profileImage' onClick={handleMenuComponentClick}>
              <img src={photoUrl} alt='profile' />
            </div>
          ) : (
            <button onClick={handleSignOut}>Logout</button>
          )}
        </div>
      </div>
      {open && <Cart />}
      {openProfile && <ProfileMenu />}
    </div>
  );
}
