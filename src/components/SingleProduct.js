import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Spinner from './Spinner';
import {addCart} from '../redux/actions/'

const SingleProduct = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch();
    const addProduct = (product) =>{
        dispatch(addCart(product));
    }

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
                    <button type="button" className="btn btn-outline-dark px-4 py-2" onClick={()=>addProduct(product)}>
                        Add to Cart
                    </button>
                    <Link to='/cart' className="btn btn-dark ms-2 px-3 py-2" role="button">
                        Go to Cart
                    </Link>
                </div>
            </div>
        </div>} 
        </>
    )
}

export default SingleProduct
