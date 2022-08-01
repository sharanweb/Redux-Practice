

import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectProduct } from "../redux/actions/Prodaction";

export const ProductDetails = () => {
    const {productId} = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state)=>state)

    const getData = async()=>{
        const res = await axios.get(`https://fakestoreapi.com/products${productId}`)
        .catch((err) => {
            console.log("Err: ", err);
          });
          dispatch(selectProduct(res.data))

    }

    useEffect(()=>{
        if(productId && productId !== "") getData()
     },[productId])

  
  return (
    <div className="detail_container">
        <div>

        </div>
    </div>
  );
};