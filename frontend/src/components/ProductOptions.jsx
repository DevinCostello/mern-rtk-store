import React from 'react'
import Colors from './Colors'
import Sizes from './Sizes'

const ProductOptions = ({ product }) => {

  return (
    <>
    <Sizes sizes={product.size} />
    <Colors colors={product.colors} />
    </>
  )

}

export default ProductOptions