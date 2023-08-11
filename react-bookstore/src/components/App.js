import "./App.css";
import Footer from "./Footer.js";
import Header from "./Header.js";
import Main from "../Main.js";
import { useState, useEffect } from "react";
import * as actionCreators from "../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

function App(props) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    products,
    itemsInCart,
    loadProducts,
    addToCart,
    removeFromCart,
    submitCart,
    readCart,
  } = props;

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(
          "http://localhost:3000/data/products.json"
        );
        const json = await response.json();
        props.loadProducts(json);
        readCart();
        setIsLoading(false);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, [props.loadProducts]);

  // useEffect(() => {
  //   let shuffled = shuffleArray(props.products);
  //   setShuffledProductList(shuffled);
  // }, [props.products]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container" data-testid="app">
      <Header />
      <Main
        products={props.products}
        itemsInCart={props.itemsInCart}
        addToCart={props.addToCart}
        removeFromCart={props.removeFromCart}
        submitCart ={props.submitCart}
      />
      <Footer />
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    itemsInCart: state.cart.items,
    products: state.products.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

// function App(props) {
//   const [itemsInCart, setItemsInCart] = useState(['1','2','3']);

//   return (
//     <div className="container" data-testid="app">
//       <Header />
//       <Main products={productData} itemsInCart={itemsInCart} />
//       <Footer />
//     </div>
//   );
// }

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
