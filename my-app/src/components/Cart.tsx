import CartItem from "./CartItem";
import styles from "./Cart.module.css";

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
  cartItems:
  }

function Cart(props: Props) {
  return (
    <>
      <div className={styles.cart}>
        <h2>Cart</h2>
        {props.cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <p>
          Total: ${" "}
          {props.cartItems.reduce(
            (prev, cartItem) => prev + parseFloat(cartItem.price),
            0
          )}
        </p>
      </div>
    </>
  );
}
export default Cart;
