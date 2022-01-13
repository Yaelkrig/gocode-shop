import { useState } from "react";
import "./Cart.css"

const Cart = ({ cart, addToCart, removeFromCart }) => {
    const [show, setShow] = useState(true)
    let pay = 0;
    return (
        <div className="Cart">
            <div className="header">
                <h3>Cart</h3>
                <button
                    className={show ? "hide" : "show"}
                    onClick={() => { setShow(!show) }}></button>
            </div>
            {cart.map(product => {
                pay += product.quantity * product.price
                return (show &&
                    <span key={product.id} className='product' id={product.id}>
                        <img src={product.image} alt={product.title} />{product.title}
                        <br />
                        <button className="add" id={product.id}
                            onClick={(e) => {
                                console.log(e.target);
                                addToCart(e.target.id)
                            }} ></button>
                        {product.quantity}
                        <button className="remove" id={product.id}
                            onClick={(e) => removeFromCart(e.target.id)}></button>
                        <br />{product.price * product.quantity} $

                    </span>)
            }

            )}
            <span className="to_pay">Pay {pay.toFixed(2)}</span>
        </div>
    )
}

export default Cart;