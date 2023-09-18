import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import {  useDispatch } from "react-redux";
import { useParams } from "react-router";
import{addCart} from'../redux/action'
import { NavLink } from "react-router-dom";
const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch =useDispatch();
  const addProduct=(product)=>{
    dispatch(addCart(product));
  }
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`http://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    }
    getProduct();
  }, [id]);
  const Loading= ()=>{
    return(
      <div className="col-md-6">
      
      </div>
    )
  }
  const ShowProduct=()=>{
    return(
      <>
      
      
      <div className="col-md-6">
      <img style={{paddingTop: 20}} src={product.image} alt= {product.title} width="400px" height="400px" />
     
      </div>
      <div className="col-md-6">
      <h4 className="text-uppercase text-center text-black-50">{product.category}</h4>
      <h1 className="display-5">{product.title}</h1>
      <p className="lead fw-bolder">
      Rating {product.rating&&product.rating.rate}   <i class="fa fa-star"/><i class="fa fa-star"/>
                    <i class="fa fa-star"/>
                    <i class="fa fa-star"/>
                       
      </p>
      <h3 className="display-6 fw-bold my-4">
      $ {product.price}
      </h3>
      <p className="lead">{product.description}</p>
      
      <button class="btn btn-dark btn-rounded mr-1" onClick={()=>addProduct(product)}>
                        <i class="fa fa-shopping-cart"></i>
                    </button>
                    <NavLink  to ="/cart"className="btn btn-primary btn-rounded">Buy Now</NavLink>
      </div>
      
      
      </>
    )
  }
  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );

  }
export default Product;
