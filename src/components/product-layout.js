import React from "react";

function ProductLayout (props) {
    return (
        <div>
            <img 
            src={props.img} 
            loading="lazy" 
            alt={props.name} 
            width="300px"
            />
            <p>{props.name}</p>
            <p>${props.price} {props.currency}</p>
        </div>
    )
}

export default ProductLayout;
