import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { singleProducts } from '../../Redux/Reducer/productSlice'

const ProductDetail = () => {
    const {id} = useParams()
    const dispatch = useDispatch()

    const {productDetails} = useSelector((state)=>state.products)

    console.log(productDetails);
    

    useEffect(()=>{
        dispatch(singleProducts(id))
    },[])

  return (
    <div>
        <h1>Name: {productDetails?.title}</h1>
        <img src={productDetails?.thumbnail}/>
    </div>
  )
}

export default ProductDetail