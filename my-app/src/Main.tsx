import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

interface Book {
  id: string;
  title: string;
  author: string;
  published?: string;
  country?: string;
  lang?: string;
  pages?: string;
  image?: string;
  url?: string;
  price?: string;
  }

interface Props {
addToCart: (id: string) => void;
removeFromCart:  (id: string) => void;
products:Book[];
itemsInCart: string[];
}

function Main(props: Props) {
  function getProduct(products: Book[], item: string) {
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
        />
      </div>
      <div className="col-md-4">
        <Cart cartItems={cartItems} removeFromCart={props.removeFromCart} />
      </div>
    </main>
  );
}
export default Main;
