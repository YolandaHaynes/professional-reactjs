import styles from "./CartItem.module.css";

function CartItem(props) {
  return (
    <>
      <div className={styles.CartItem}>
        <p>{props.title} - {props.price} </p>
        {/* <button onClick={() => props.removeFromCart(props.id)}>Remove</button> */}
      </div>
    </>
  );
}
export default CartItem;
