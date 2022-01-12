import { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import "./Product.css"


const Product = ({ itemDetails }) => {
    const { addToCart } = useContext(CartContext)
    let { image, title, price, id } = itemDetails;

    return (
        <div className="Product">
            <div className="product-image">
                <img src={image} alt={title} />
            </div>
            <button className="add" id={id}
                onClick={(e) => { addToCart(e.target.id) }}></button>
            <button className="remove"></button>
            <div className="product-info">
                <h5>{title}</h5>
                <h6>{price}$</h6>
            </div>
        </div>
    )
}
export default Product;
