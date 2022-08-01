
import { useSelector } from "react-redux";
import React, { useEffect, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

export const ProductComponent = () => {
    const products = useSelector((state)=>state.allProducts.products);

    const  renderList  = products.map((el)=>{
        const {id, title, image, price, category} = el;
        return (
            <div className="ui grid container" key={id}>
                <Link to={`/product/${id}`}>

                <div className="link cards">
                    <div className="card">
                        <div className="image">
                            <img src={image} alt="imageproduct"></img>
                        </div>
                        <div className="content">
                            <div className="header1">{title}</div>
                            <div className="price">{price}</div>
                            <div className="category">{category}</div>
                        </div>
                    </div>
                </div>

                </Link>
                
            </div>
        )
    })

    return (
        <>{renderList}</>
    )
    // const {id, title} = products[0];
    // console.log(title);
  
  ;
};