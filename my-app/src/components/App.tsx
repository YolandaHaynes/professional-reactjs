import "./App.css";
import Footer from "./Footer.js";
import Header from "./Header.js";
import Main from "../Main";
import { useState, useEffect} from "react";

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

 function App() { 
  const [itemsInCart, setItemsInCart] = useState<Array<string>>([]);
  const [products, setProducts] = useState<Array<Book>>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  
  function shuffleArray(array: Book[]) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  useEffect(() => {
    async function fetchData() {
    try {
    setIsLoading(true);
    const response = await
    fetch('http://localhost:3000/data/products.json');
    const json = await response.json();
    shuffleArray(json);
    setProducts(json);
    setIsLoading(false);
    } catch (e) {
    console.error(e);
    }
    };
    fetchData();
    }, [setProducts]);

    function addToCart(id: string){
      let newItems = [...itemsInCart, id];
      setItemsInCart(newItems);
    };
  
    function removeFromCart(idToRemove: string) {
      let newItems = itemsInCart.filter((id) => id !== idToRemove);
      setItemsInCart(newItems);
    };

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="container" data-testid="app">
        <Header />
        <Main
          products={products}
          itemsInCart={itemsInCart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
        <Footer />
      </div>
    );
}

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

export default App;
