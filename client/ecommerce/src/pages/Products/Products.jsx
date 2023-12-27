import React, { useState } from 'react'
import { useParams } from 'react-router'
import List from '../../components/List/List'
import useFetch from '../../hooks/useFetch'
import './Products.scss'
export default function Products() {
  const [maxPrice, setMaxPrice] = useState(1000)
  const [selectedSubCats, setSelectedSubCats] = useState([])
  const cartId = parseInt(useParams().id)

  const [sort, setSort] = useState('asc')
  const { products } = useFetch(
    '/sub-categories?populate=*&filters[categories][id][$eq]=' + cartId,
  )

  const handleSelectSubCats = (e) => {
    const value = e.target.value
    const isChecked = e.target.checked

    setSelectedSubCats((pre) =>
      isChecked ? [...pre, value] : pre.filter((item) => item !== value),
    )
  }

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Products and Catagories</h2>
          {products?.map((item) => {
            return (
              <div className="inputItem" key={item.id}>
                <input
                  type="checkbox"
                  name={item.id}
                  value={item.id}
                  onClick={handleSelectSubCats}
                />
                <label htmlFor={item.id}>{item.attributes.title}</label>
              </div>
            )
          })}
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              value={maxPrice}
              onChange={(e) => {
                setMaxPrice(e.target.value)
              }}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" name="1" onClick={() => setSort('asc')} />
            <label htmlFor="1">Price(Lowest first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" name="1" onClick={() => setSort('desc')} />
            <label htmlFor="2">Price(Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          src="https://images.unsplash.com/photo-1483444308400-fb9510501d23?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="topImg"
        />
        <List
          cartId={cartId}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCats}
        />
      </div>
    </div>
  )
}
