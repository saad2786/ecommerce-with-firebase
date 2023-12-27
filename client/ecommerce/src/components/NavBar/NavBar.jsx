import React, { useState } from 'react'
import './NavBar.scss'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import { Link } from 'react-router-dom'
import Cart from '../Cart/Cart'
import { useSelector } from 'react-redux'

export default function NavBar() {
  const data = useSelector((state) => state.cart.products)
  const [open, setOpen] = useState(false)
  return (
    <div className="navBar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <span>Flags</span>
            <KeyboardArrowDownOutlinedIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownOutlinedIcon />
          </div>
          <div className="item">
            <Link to="products/1">Women</Link>
          </div>
          <div className="item">
            <Link to="products/2">Men</Link>
          </div>
          <div className="item">
            <Link to="products/3">Children</Link>
          </div>
          <div className="item">
            <Link to="products/4">Accessories</Link>
          </div>
        </div>
        <div className="center">
          <h2>
            <Link to="/">
              <span>sp</span> Store
            </Link>
          </h2>
        </div>
        <div className="right">
          <div className="item">Homepage</div>
          <div className="item">About</div>
          <div className="item">Contact</div>
          <div className="item">Store</div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineIcon />
            <FavoriteBorderOutlinedIcon />
            <div
              className="cartIcon"
              onClick={() => {
                setOpen((val) => !val)
              }}
            >
              <ShoppingCartOutlinedIcon />
              <span>{data.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  )
}
