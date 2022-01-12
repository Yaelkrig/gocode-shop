import "./Header.css"


const Header = ({ categories, selectByFilter, sort }) => {
    return (
        <div className="Header">

            <nav className="product-filter">
                <h1>Shop</h1>
                <div className="sort">
                    <div className="collection-sort">
                        <label>Filter by:</label>
                        <select onChange={(e) => selectByFilter(e.target.value)}>
                            <option key={"allCategories"} value={"all"}>all categories</option>
                            {categories.map((filter) => (
                                <option key={filter} value={filter}>{filter}</option>
                            ))}
                        </select>
                    </div>

                    <div className="collection-sort">
                        <label>Sort by:</label>
                        <select onChange={(e) => sort(e.target.value)}>
                            <option value="Featured">Featured</option>
                            <option value="Best Selling">Best Selling</option>
                            <option value="Alphabetically, A-Z">Alphabetically, A-Z</option>
                            <option value="Alphabetically, Z-A">Alphabetically, Z-A</option>
                            <option value="Price, low to high">Price, low to high</option>
                            <option value="Price, high to low">Price, high to low</option>
                        </select>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Header;