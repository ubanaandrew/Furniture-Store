import React from "react";

// product card component with properties
function ProductCard (props) {
    return (
        <div>
            <img src={props.img} loading="lazy" alt={props.name} width="300px"/>
            <p>{props.name}</p>
            <p>${props.price} {props.currency}</p>
        </div>
    )
}

export default ProductCard;
