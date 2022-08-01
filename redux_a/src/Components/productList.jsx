

import React, { useEffect, useCallback, useMemo } from "react";
// import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductComponent } from "./productComponenet";
import axios from "axios";
import { setProduct } from "../redux/actions/Prodaction";

export const ProductList = () => {
    const products = useSelector((state)=>state)
    const dispatch = useDispatch();
    console.log(products);
    const getData = async()=>{
        const res = await axios.get("https://fakestoreapi.com/products")
        .catch((err) => {
            console.log("Err: ", err);
          });
          dispatch(setProduct(res.data))

    }

    useEffect(()=>{
        getData();
    },[]);

  
  return (
    <div className="gridshow">
        <ProductComponent></ProductComponent>
        {/* this is list */}
    </div>
  );
};

