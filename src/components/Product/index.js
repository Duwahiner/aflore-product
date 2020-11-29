import React, { useEffect, useState } from 'react'
import ProductItems from './components/PorductItems'

const Product = ({ product }) => {
  const [extract, setExtract] = useState(product)

  useEffect(() => {
    if (typeof product === 'object') {
      if (Object.keys(product).length > 0) {
        if (product.children.length > 0) {
          setExtract(product)
        } else {
          setExtract(product)
        }
      }
    } else {
      setExtract(product)
    }
  }, [product])

  return (
    <ProductItems product={extract} />
  )
}
export default Product
