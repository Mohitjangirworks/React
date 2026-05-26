import { useEffect, useState } from "react";
import getAllProducts from "../services/api";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"

function Product() {

    //make a state [product,setProduct]
    const [products, setProducts] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {  //esme side effects ko handle karenge 
        fetchProducts();
    }, [])

    async function fetchProducts() {
        const data = await getAllProducts();
        setProducts(data.products)
    }
    
    const handleCardClick=(event,id)=>{
        navigate(`/product/${id}`)
    }
    //useState
    return (
        <div>
            <h1>Product Listing Page</h1>

            {products.map((product) => (
                // <Link
                //     to={`/product/${product.id}`}
                //     key={product.id}
                // >
                <div onClick={(event)=>handleCardClick(event,product.id)}>
                    <img
                        src={product.thumbnail}
                        width="200px"
                    />
                    <h2>{product.title}</h2>
                    <p>₹ {product.price}</p>
              </div>
            ))}
        </div >
    )
}
export default Product;