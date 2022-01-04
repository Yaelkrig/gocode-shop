import "./Products.css"
import Product from "../Product/Product";

const Products = ({ productsArr }) => (

    <section className="Products">
        {productsArr.map(item => (
            <Product key={item.id} itemDetails={item} />
        ))}
    </section>
)


export default Products;