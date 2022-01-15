import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Spinner from './Spinner';

const SingleProduct = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    const getProduct = async() => {
        setLoading(true);
        let response = await fetch(`https://fakestoreapi.com/products/${id}`)
        setProduct(await response.json());
        setLoading(false);
    }
    useEffect(() => {
      getProduct();
      // eslint-disable-next-line
    }, [])

    return (
        <>
        {loading?<Spinner/>:<div className="container py-5">
            <div className="row py-4">
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} style={{height:"400px", width:"400px"}}/>
                </div>
                <div className="col-md-6">
                    <h4 className='text-uppercase text-black-50'>{product.category}</h4>
                    <h1 className='display-5'>{product.title}</h1>
                    <p className='lead fw-bold'>
                        Rating {product.rating && product.rating.rate}
                        <i className="fas fa-star"></i>
                    </p>
                    <p className='display-6 fw-bold my-4'>
                        ${product.price}
                    </p>
                    <p className='lead'>{product.description}</p>
                    <button type="button" className="btn btn-outline-dark px-4 py-2">
                        Add to Cart
                    </button>
                    <a href='/' className="btn btn-dark ms-2 px-3 py-2" role="button">
                        Go to Cart
                    </a>
                </div>
            </div>
        </div>} 
        </>
    )
}

export default SingleProduct
