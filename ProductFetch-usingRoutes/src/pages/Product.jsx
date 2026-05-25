import { useEffect, useState } from "react";
import getAllProducts from "../services/api";
import { Link } from "react-router-dom";

function Product() {

    //make a state [product,setProduct]
    const [products, setProducts] = useState([]);
    useEffect(() => {  //esme side effects ko handle karenge 
        fetchProducts();
    }, [])

    async function fetchProducts() {
        const data = await getAllProducts();
        setProducts(data.products)
    }

    //useState
    return (
        <div>
            <h1>Product Listing Page</h1>

            {products.map((product) => (
                <Link
                    to={`/product/${product.id}`}
                    key={product.id}
                >
                    <img
                        src={product.thumbnail}
                        width="200px"
                    />
                    <h2>{product.title}</h2>
                    <p>₹ {product.price}</p>
                </Link>
            ))}
        </div >
    )
}
export default Product;