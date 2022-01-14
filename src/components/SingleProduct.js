import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const SingleProduct = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([])

    const getProduct = async() => {
        let response = await fetch(`https://fakestoreapi.com/products/${id}`)
        setProduct(await response.json());
    }
    useEffect(() => {
      getProduct();
      // eslint-disable-next-line
    }, [])
    return (
        <div>
            <h1>{product.title}</h1>
        </div>
    )
}

export default SingleProduct
