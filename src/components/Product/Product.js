import "./Product.css"
const Product = ({ itemDetails }) => {
    let { image, title, price } = itemDetails;
    return (
        <div className="Product">
            <div className="product-image">
                <img src={image} alt={title} />
            </div>
            <div className="product-info">
                <h5>{title}</h5>
                <h6>{price}$</h6>
            </div>
        </div>
    )
}
export default Product;
