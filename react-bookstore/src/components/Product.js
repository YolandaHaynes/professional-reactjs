import styles from "./Product.module.css";


function Product(props) {
  const { title, author, published, country, lang, pages, image, url, price } =
    props;
  function handleClick() {
    if (props.inCart) {
      props.removeFromCart(props.id);
    } else {
      props.addToCart(props.id);
    }
  }

  return (
    <>
      <div className={styles.product}>
        <img
          className={styles.thumbnail}
          src={image ? "images/" + image : "images/default.jpg"}
          alt={title}
        />
        <p>
          by: {author}
          <br />
          published: {published}, {country}
          <br />
          language: {lang}
          <br />
          pages: {pages}
          <br />
          price:${price}
          <br />
          <a href={url}>link</a>
        </p>
        <button onClick={handleClick}>
          {props.inCart ? "Remove from Cart" : "Add to Cart"}{" "}
        </button>
      </div>
    </>
  );
}
export default Product;
