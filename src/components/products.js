import React, { useState } from "react";
import { productAPI } from '../api/productAPI';
import ProductCard from "./product-card";


function Products () {
    const [products, setProducts] = useState([]);
    React.useEffect(() => {
        async function getProducts() {
            let data = await productAPI(); 
            setProducts(data)           
        }
        getProducts();
    }, [])

    return (
        <div className="margin2 Value-box">
            <div className="Product">
                {/* loop product items */}
                {products?.map((product) => (
                    <ProductCard key={product._id} name={product?.fulhausProductName} img={product?.imageURLs[0]} price={product?.retailPrice} currency={product.orderCurrency} />
                ))}
            </div>
        </div>
    )
}

export default Products;
