import React from 'react'
import useFetch from '../../hooks/useFetch'

import Card from '../Card/Card'
import './List.scss'
const List = ({ cartId, maxPrice, sort, subCats }) => {
  const { products, loading } = useFetch(
    `/products?populate=*&filters[categories][id][$eq]=${cartId}${subCats.map(
      (item) => `&filters[sub_categories][id][$eq]=${item}`,
    )}&filters[price][$lte]=${maxPrice}&sort=price:${sort}`,
  )
  return (
    <div className="list">
      {loading
        ? 'loading'
        : products?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  )
}

export default List
