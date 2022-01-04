import "./Products.css"
import Product from "../Product/Product";
import productsArr from "../../Assets";
const Products = () => (

    <section className="Products">
        {productsArr.map(item => (
            <Product key={item.id} itemDetails={item} />
        ))}
    </section>
)
asda
export default Products;