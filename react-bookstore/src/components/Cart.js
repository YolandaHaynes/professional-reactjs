import CartItem from "./CartItem";
import styles from "./Cart.module.css";

function Cart(props) {
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
        <div>
          <button onClick={() => props.submitCart(props.cartItems)}>
            Check Out
          </button>
        </div>
      </div>
    </>
  );
}
export default Cart;
