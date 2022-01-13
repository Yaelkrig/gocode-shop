import { useRef, useState } from "react";
import "./Cart.css"

const Cart = ({ cart, addToCart, removeFromCart }) => {
    const [show, setShow] = useState(true)
    let pay = 0;
    let quantities = 0;
    const allQuantity = useRef(0);

    return (
        <div className="Cart">
            <div className="header">
                <h3>Cart</h3>
                <span className="cart_img">
                    <span className="products_quantity">{allQuantity.current}</span>
                </span>
                <button
                    className={show ? "hide" : "show"}
                    onClick={() => { setShow(!show) }}></button>
            </div>
            {cart.map(product => {
                pay += product.quantity * product.price;
                quantities += product.quantity;
                allQuantity.current = quantities;
                return (show &&
                    <span key={product.id} className='product' id={product.id}>
                        <img src={product.image} alt={product.title} />
                        <span className="product_title">
                            {product.title}
                        </span>
                        <br />
                        <button className="add" id={product.id}
                            onClick={(e) => {
                                addToCart(e.target.id);
                            }} ></button>
                        <span className="product-quantity">
                            {product.quantity}
                        </span>
                        <button className="remove" id={product.id}
                            onClick={(e) => removeFromCart(e.target.id)}></button>
                        <br />{product.price * product.quantity} $

                    </span>)
            }

            )}
            <span className="to_pay">Pay {pay.toFixed(2)} $</span>
        </div>
    )
}

export default Cart;