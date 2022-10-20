import React, { useState } from "react";
import axios from "axios";
import ProductLayout from "./product-layout";

const client = axios.create({ 
    baseURL: 'https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=8'
  });

function Products () {
    const [products, setProducts] = useState([]);
    React.useEffect(() => {
        async function getProducts() {
            await client.get().then((response) => {
                setProducts(response.data.data.products);
            }).catch((err) => {
                console.log(err);
            });              
        }
        getProducts();
        }, [])

    return (
        <div className="margin2 Tab-box">
            <div className="Product">
                {products?.map((product) => (
                    <ProductLayout key={product._id} name={product?.fulhausProductName} img={product?.imageURLs[0]} price={product?.retailPrice} currency={product.orderCurrency} />
                ))}
            </div>
        </div>
    )
}

export default Products;
