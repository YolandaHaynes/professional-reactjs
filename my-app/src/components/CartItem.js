import styles from "./CartItem.module.css";

function CartItem({title= '', price= ''}) {
  return (
    <>
      <div className={styles.CartItem}>
        <p>{title} - {price} </p>
      </div>
    </>
  );
}
export default CartItem;
