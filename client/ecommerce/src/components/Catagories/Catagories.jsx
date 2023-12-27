import React from 'react'
import { Link } from 'react-router-dom'
import './Catagories.scss'
export default function Catagories() {
  return (
    <div className="catagories">
      <div className="col">
        <div className="row">
          <img
            src="https://plus.unsplash.com/premium_photo-1683140431958-31505d0fd1ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHllbGxvdyUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <button>
            <Link to="/products/1">Sale</Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW4lMjBmYXNoaW9ufGVufDB8fDB8fHww"
            alt=""
          />
          <button>
            <Link to="/products/1">Women</Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://images.unsplash.com/photo-1591470481729-2bcc11e3acb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fG1hbiUyMGZhc2hvaW4lMjBjbG90aHxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <button>
            <Link to="/products/1">Trending</Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://images.unsplash.com/photo-1515987913882-11f2c427c484?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fG1lbnMlMjBmYXNoaW9ufGVufDB8MHwwfHx8MA%3D%3D"
                alt=""
              />
              <button>
                <Link to="/products/1">Men</Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://images.unsplash.com/photo-1566150905968-62f0de3d6df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGhhbmRiYWd8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
              <button>
                <Link to="/products/1">Accessories</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://media.istockphoto.com/id/1434624063/photo/trendy-sneaker-on-a-blue-background-close-up-side-view.webp?s=170667a&w=0&k=20&c=yOWv7OKG1ftcHt4y-idJdFnBvNLbV-c2XkJSoKN6wgA="
            alt=""
          />
          <button>
            <Link to="/products/1">Shoes</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
