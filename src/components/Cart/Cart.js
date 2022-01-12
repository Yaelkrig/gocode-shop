import "./Cart.css"

const Cart = ({ cart }) => {
    console.log(cart);
    return (
        <div className="Cart">
            <h3>Cart</h3>
            {cart.map(product => (<span key={product.id} id={product.id}>
                <img src={product.image} alt={product.title} />
                {product.title} quantity = {product.quantity}
            </span>)

            )}
        </div>
    )
}

export default Cart;