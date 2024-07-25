import React, { useContext } from "react";
import styles from "../module/Checkout.module.css";
import { CartContext } from "../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const Checkout = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const ProceedToCheckout = () => {
    cartItems.length > 0
      ? alert("Proceeding to checkout.")
      : alert(
          "Your cart is empty. Please add items to the cart before proceeding."
        );
  };

  return (
    <div className={styles.cartOverlay}>
      <div className={styles.cartContainer}>
        <div className={styles.cartHeader}>
          <h2>Bag</h2>
        </div>
        <div className={styles.cartItems}>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={`${item.id}-${item.size}`} className={styles.cartItem}>
                <div className={styles.itemDetails}>
                  <div className={styles.itemImgAndNameAndSize}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className={styles.itemImage}
                    />
                    <h3 className={styles.itemName}>{item.name}</h3>
                    <p className={styles.itemSize}>{item.size}</p>
                  </div>
                  <p className={styles.itemPrice}>${item.price.toFixed(2)}</p>
                  <div className={styles.itemQuantity}>
                    <button
                      className={`${styles.quantityBtn} ${styles.increaseDecreaseQuantity}`}
                      onClick={() => decreaseQuantity(item.id, item.size)}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <input
                      className={styles.quantityInput}
                      type="number"
                      value={item.quantity}
                      readOnly
                    />
                    <button
                      className={`${styles.quantityBtn} ${styles.increaseDecreaseQuantity}`}
                      onClick={() => increaseQuantity(item.id, item.size)}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                </div>
                <button
                  className={styles.removeItem}
                  onClick={() => removeFromCart(item.id, item.size)}
                >
                  &times;
                </button>
              </div>
            ))
          ) : (
            <p>Your bag is empty</p>
          )}
        </div>
        <div className={styles.cartFooter}>
          <div className={styles.cartTotal}>
            <span>Total:</span>
            <span className={styles.totalPrice}>${total.toFixed(2)}</span>
          </div>
          <button
            className={styles.checkoutBtn}
            onClick={() => ProceedToCheckout()}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
