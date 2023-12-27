import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import './FeaturedProducts.scss'
import useFetch from '../../hooks/useFetch'

// const data = [
//   {
//     id: 1,
//     img:
//       'https://images.unsplash.com/photo-1617114919297-3c8ddb01f599?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     img2:
//       'https://images.unsplash.com/photo-1619574783897-bd83add4d4cd?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     title: 'Formal Shirt-Pant',
//     isNew: true,
//     oldPrice: 19,
//     price: 12,
//   },
//   {
//     id: 2,
//     img:
//       'https://images.unsplash.com/photo-1619102814948-e164e584cf0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww',
//     img2:
//       'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww',
//     title: 'Suit-Pant',
//     isNew: true,
//     oldPrice: 19,
//     price: 12,
//   },
//   {
//     id: 3,
//     img:
//       'https://images.unsplash.com/photo-1599725728598-dc7ed109ff89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww',
//     img2:
//       'https://images.unsplash.com/photo-1599725728689-f5c3cbb086ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww',
//     title: 'Blazer and Inner-blazer',

//     oldPrice: 19,
//     price: 12,
//   },
//   {
//     id: 4,
//     img:
//       'https://images.unsplash.com/photo-1615093826418-b7d67b17b505?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww',
//     img2:
//       'https://images.unsplash.com/photo-1617331647819-2495792e53e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww',
//     title: 'Hoodie',

//     oldPrice: 19,
//     price: 12,
//   },
// ]
export default function FeaturedProducts({ type }) {
  const { products, loading, error } = useFetch(
    '/products?populate=*&filters[type][$eq]=' + type,
  )

  return (
    <div className="featuredProducts">
      <div className="top">
        <h2>{type} products</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quibusdam
          ipsa veniam dolor non, tempore doloremque quia ea rerum error
          aspernatur corrupti magni sunt labore soluta, eveniet, eos dicta
          maiores.
        </p>
      </div>
      <div className="bottom">
        {error
          ? 'Something Went Wrong!'
          : loading
          ? 'Loading'
          : products?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  )
}
