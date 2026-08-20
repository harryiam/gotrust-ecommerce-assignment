import { useEffect, useState } from "react";
import SearchBar from "./Components/SearchBar";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";
import useFetch from "./hooks/useFetch";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [cartOpen, setCartOpen] = useState(false);

  const { data, loading, error } = useFetch(
    "https://dummyjson.com/products"
  );

  const products = data?.products || [];

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const filteredProducts = products.filter((product) =>
    product.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <header className="header">
        <h1>Products</h1>

        <button
          className="cart-button"
          onClick={() => setCartOpen(true)}
        >
          🛒 Cart ({cart.length})
        </button>
      </header>

      <main>
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <ProductList
          products={filteredProducts}
          loading={loading}
          error={error}
          setCart={setCart}
        />
      </main>

      <Cart
        cart={cart}
        setCart={setCart}
        isOpen={cartOpen}
        setIsOpen={setCartOpen}
      />
    </div>
  );
}

export default App;