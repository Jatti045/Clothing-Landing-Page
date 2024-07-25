import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import styles from "../module/ItemDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const ItemDetails = ({ item }) => {
  const { addToCart } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState("");
  const [icon, setIcon] = useState(faShoppingCart);

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart({ ...item, size: selectedSize });
      setIcon(faCheckCircle);
      setTimeout(() => setIcon(faShoppingCart), 2000);
    } else {
      alert("Please select a size.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={item.image} alt={item.name} className={styles.image} />
      </div>
      <div className={styles.detailsContainer}>
        <h2 className={styles.category}>{item.category}</h2>
        <h1 className={styles.name}>{item.name}</h1>
        <p className={styles.description}>{item.description}</p>
        <p className={styles.price}>${item.price.toFixed(2)}</p>
        <div className={styles.sizeContainer}>
          <label htmlFor="size" className={styles.sizeLabel}>
            Size:
          </label>
          <select
            id="size"
            className={styles.sizeSelect}
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            <option value="">Select a size</option>
            {item.sizes &&
              item.sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
          </select>
        </div>
        <button className={styles.addToCartButton} onClick={handleAddToCart}>
          <FontAwesomeIcon icon={icon} className={styles.icon} />
          {icon === faShoppingCart ? " ADD TO BAG" : " ADDED TO BAG!"}
        </button>
      </div>
    </div>
  );
};

export default ItemDetails;
