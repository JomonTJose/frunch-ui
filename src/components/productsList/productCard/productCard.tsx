import React from 'react'
import { IProduct } from '../products.model'

type IProdProps = {
    product: IProduct,
};

const ProductCard = ({ product }: IProdProps) => {
    return (
        <div className='max-width'>
            {product.product_name}</div>
    )
}

export default ProductCard