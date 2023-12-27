import React from 'react'
import './Footer.scss'

export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <p className="title">Catagories</p>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <p className="title">Links</p>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <p className="title">About</p>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            excepturi sequi sunt eligendi porro pariatur consequatur iure ipsa
            dolorum, iste perferendis fugiat placeat mollitia natus similique
            culpa ipsum ut repudiandae.
          </span>
        </div>
        <div className="item">
          <p className="title">Contact</p>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            obcaecati repellendus optio corporis amet id quidem eum labore.
            Distinctio autem at iure dolore fuga veritatis corporis eligendi et
            placeat exercitationem.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <h2>
            <span>sp</span> Store
          </h2>
          <p className="copy">&copy; Copyrights 2023, All Rights Reserved</p>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}
