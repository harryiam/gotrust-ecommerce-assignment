import CartItem from "./CartItem";

export default function Cart({
  cart,
  setCart,
  isOpen,
  setIsOpen,
}) {
  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <>
      {isOpen && (
        <div
          className="cart-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`cart-drawer ${
          isOpen ? "open" : ""
        }`}
      >

        <div className="cart-header">
          <h2>Your Cart</h2>

          <button
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>

        <div className="cart-content">

          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                setCart={setCart}
              />
            ))
          )}

        </div>

        <div className="cart-footer">
          <h3>
            Total: ${total.toFixed(2)}
          </h3>

          <button className="checkout-button">
            Checkout
          </button>
        </div>

      </div>
    </>
  );
}