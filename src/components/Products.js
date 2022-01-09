import React, { useEffect, useState } from 'react'

const Products = () => {
    const [product, setProduct] = useState([])

    const fetchData = async() =>{
        let data = await fetch('https://fakestoreapi.com/products')
        let parsedData = await data.json()
        setProduct(product.concat(parsedData))
        console.log(parsedData);
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className='container text-center mt-5'>
            <h2>All Products</h2>
            {product.map((element)=>{
                <h1>{element.title}</h1>
            })}
        </div>
    )
}

export default Products
