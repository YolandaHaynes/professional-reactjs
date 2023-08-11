import Product from "./Product";
import styles from "./ProductList.module.css";


function ProductList(props) {
  // console.log({props})
  const itemsInCart = props.itemsInCart;

  return (
    <>
      {props.products ? (
        <ul className={styles.productList}>
          {console.log(props.products)}
          {props.products.map((product) => (
            <li key={product.id} className={styles.productListItem}>
              <Product
                {...product}
                inCart={itemsInCart.includes(product.id) ? true : false}
                addToCart={props.addToCart}
                removeFromCart={props.removeFromCart}
              />
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </>
  );
}
export default ProductList;
