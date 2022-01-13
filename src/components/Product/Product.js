import { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import "./Product.css"


const Product = ({ itemDetails }) => {
    const { addToCart, removeFromCart } = useContext(CartContext)

    let { image, title, price, id, quantity } = itemDetails;

    return (
        <div className="Product">
            <div className="product-image">
                <img src={image} alt={title} />
            </div>
            <div className="product-info">
                <div className="product_buttons">
                    <button className="add" id={id}
                        onClick={(e) => { addToCart(e.target.id) }}></button>
                    <span>{quantity}</span>
                    <button className="remove" id={id}
                        onClick={(e) => removeFromCart(e.target.id)}></button>
                </div>
                <h5>{title}</h5>
                <h6>{price}$</h6>
            </div>
        </div>
    )
}
export default Product;
