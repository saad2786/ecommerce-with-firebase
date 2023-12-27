import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import PinterestIcon from '@mui/icons-material/Pinterest'
import GoogleIcon from '@mui/icons-material/Google'
import './Contact.scss'
export default function Contact() {
  return (
    <div className="contact">
      <div className="wrapper">
        <div className="title">Be in Touch with us:</div>
        <div className="mailBox">
          <input type="email" placeholder="Enter your e-mail" />
          <button>JOIN US</button>
        </div>
        <div className="icons">
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
          <PinterestIcon />
          <GoogleIcon />
        </div>
      </div>
    </div>
  )
}
