import { useEffect, useState } from 'react'
import { makeRequest } from '../makeRequest'

export default function useFetch(url) {
  const [products, setProducts] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await makeRequest.get(url)
        // console.log(type, response.data.data[0].attributes?.type)
        console.log(response.data.data)
        setProducts(response.data.data)
        setLoading(false)
      } catch (err) {
        setError(true)
        console.log(err)
      }
    }
    fetchData()
  }, [url])
  return { products, loading, error }
}
