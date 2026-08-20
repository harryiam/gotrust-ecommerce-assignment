export default function ProductCard({
  product,
  setCart,
}) {
  const addToCart = () => {
    if (product.stock === 0) {
      return;
    }

    setCart((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  return (
    <div className="product-card">

      <img
        src={product.thumbnail}
        alt={product.title}
      />

      <h3>{product.title}</h3>

      <p>${product.price}</p>

      <p>
        {product.stock > 0
          ? `Stock: ${product.stock}`
          : "Out of stock"}
      </p>

      <button
        disabled={product.stock === 0}
        onClick={addToCart}
      >
        {product.stock === 0
          ? "Unavailable"
          : "Add to Cart"}
      </button>

    </div>
  );
}