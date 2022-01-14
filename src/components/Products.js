import React, { useEffect, useState } from 'react'
import {
    Link
  } from "react-router-dom";

const Products = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
   
    const fetchData = async() =>{
        let response = await fetch('https://fakestoreapi.com/products')
        setData(await response.clone().json())
        setFilter(await response.json());
        // console.log(await response.json());
    }
    const filterData = async(category) =>{
        let response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
        setFilter(await response.json());
        // console.log(await response.json());
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className='container text-center mt-5'>
            <h2>All Products</h2>
            <div className="buttons mt-4">
            <button type="button" className="btn btn-dark mx-2 btn-lg" onClick={fetchData}>All</button>
            <button type="button" className="btn btn-dark mx-2 btn-lg" onClick={()=>filterData("men's clothing")}>Men's Clothing</button>
            <button type="button" className="btn btn-dark mx-2 btn-lg" onClick={()=>filterData("women's clothing")}>Women's Clothing</button>
            <button type="button" className="btn btn-dark mx-2 btn-lg" onClick={()=>filterData("jewelery")}>Jewlery</button>
            <button type="button" className="btn btn-dark mx-2 btn-lg" onClick={()=>filterData("electronics")}>Electronics</button>
            </div>
            <div className="row mt-5">
            {filter.map((product)=>{
                return(
                        <div className="col-md-3 mb-4" key={product.id}>
                        <div className="card h-100 text-center p-4">
                            <img src={product.image} className="card-img-top" alt="..." style={{height:"250px"}}/>
                            <div className="card-body">
                                <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                                <p className="card-text fw-bold mt-2">Price ${product.price}</p>
                                <Link to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</Link>
                            </div>
                            </div>
                        </div> 
                )
            })}
             </div>
        </div>
    )
}

export default Products
