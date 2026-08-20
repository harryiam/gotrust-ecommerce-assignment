import ProductCard from "./ProductCard";

export default function ProductList({
  products,
  loading,
  error,
  setCart,
}) {
  if (loading) {
    return <h2>Loading products...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  if (products.length === 0) {
    return <h2>No products found</h2>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          setCart={setCart}
        />
      ))}
    </div>
  );
}