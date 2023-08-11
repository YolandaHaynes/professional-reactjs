import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import PropTypes from "prop-types";

Main.propTypes = {
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  itemsInCart: PropTypes.array.isRequired,
};

function Main(props) {
  function getProduct(products, item) {
    return products.find((product) => item === product.id);
  }
  let cartItems = props.itemsInCart.map((id) => getProduct(props.products, id));
  return (
    <main className="row" data-testid="main">
      <div className="col-md-8">
        <ProductList
          products={props.products}
          itemsInCart={props.itemsInCart}
          addToCart={props.addToCart}
          removeFromCart={props.removeFromCart}
          defaultProps={
            (ProductList.defaultProps = {
              products: [],
              itemsInCart: [],
            })
          }
        />
      </div>
      <div className="col-md-4">
        <Cart
          cartItems={cartItems}
          removeFromCart={props.removeFromCart}
          submitCart={props.submitCart}
          inCart={cartItems}
        />
      </div>
    </main>
  );
}
export default Main;
