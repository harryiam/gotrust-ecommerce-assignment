export default function CartItem({
  item,
  setCart,
}) {
  const increment = () => {
    setCart((prev) =>
      prev.map((product) =>
        product.id === item.id
          ? {
              ...product,
              quantity: product.quantity + 1,
            }
          : product
      )
    );
  };

  const decrement = () => {
    setCart((prev) =>
      prev
        .map((product) =>
          product.id === item.id
            ? {
                ...product,
                quantity: product.quantity - 1,
              }
            : product
        )
        .filter(
          (product) => product.quantity > 0
        )
    );
  };

  return (
    <div className="cart-item">

      <img
        src={item.thumbnail}
        alt={item.title}
      />

      <div className="cart-item-info">

        <h4>{item.title}</h4>

        <p>
          ${item.price}
        </p>

        <div className="quantity">

          <button onClick={decrement}>
            -
          </button>

          <span>{item.quantity}</span>

          <button onClick={increment}>
            +
          </button>

        </div>

        <p>
          Total: $
          {(item.price * item.quantity).toFixed(2)}
        </p>

      </div>

    </div>
  );
}