import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { addCart, delCart } from '../redux/actions';

const Cart = () => {
    const state = useSelector((state)=> state.handleCart);
    const dispatch = useDispatch();

    const handleAdd = (item) =>{
        dispatch(addCart(item));
    }
    const handleDel = (item) =>{
        dispatch(delCart(item));
    }

    const emptyCart =()=>{
        return(
            <div className="bg-light rounded-3 px-4 py-5 my-5">
                <div className="container py-4">
                    <div className="row text-center">
                        <h3>Your Cart is Empty!</h3>
                    </div>
                </div>
            </div>
        )
    }
    var total =0;
    const cartItems =(product) =>{
        let newPrice = product.qty * product.price;
        total = total + newPrice;
        return(
            <>
            <div className="bg-light rounded-3 px-4 py-5 my-5">
                <div className="container py-4">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={product.image} alt={product.title} style={{height:"200px", width:"180px"}} />
                        </div>
                        <div className="col-md-4">
                            <h3>{product.title}</h3>
                            <p className="lead fw-bold">
                                {product.qty} X ${product.price} = ${newPrice}
                            </p>
                            <button className="btn btn-outline-dark me-4" onClick={()=>handleDel(product)}>
                                <i className="fa fa-minus"></i>
                            </button>
                            <button className="btn btn-outline-dark me-4" onClick={()=>handleAdd(product)}>
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }

    const checkOutBtn =()=>{
        return(
            <div className="container">
                <div className="row">
                    <h3 className='text-center mb-4'>Total = ${total}</h3>
                    <button className="btn btn-outline-dark mb-5 w-25 mx-auto">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div>
            {state.length ===0 && emptyCart()}
            {state.length !==0 && state.map(cartItems)}
            {state.length !==0 && checkOutBtn()}
        </div>
    )
}

export default Cart
