import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../module/Main.module.css";
import clothingStoreProducts from "../clothing_store_products.json";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faShoppingCart,
  faShopSlash,
} from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../contexts/CartContext";

const Main = ({ index = 5 }) => {
  const location = useLocation();
  const { addToCart } = useContext(CartContext);

  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category") || "Shop all";

  const filteredItems = clothingStoreProducts
    .filter(
      (item) =>
        selectedCategory === "Shop all" ||
        item.item === selectedCategory ||
        item.category === selectedCategory
    )
    .slice(0, index);

  const categoryHeader = () => {
    if (selectedCategory === "Shop all" && index === 5) {
      return "Bestsellers";
    } else {
      return (
        selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)
      );
    }
  };

  return (
    <main className={styles.main}>
      <h1>{categoryHeader()}</h1>
      <div className={styles.mainContent}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} className={styles.itemCard}>
              <Link to={`/item/${item.id}`}>
                <div className={styles.itemImgContainer}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={styles.itemImage}
                  />
                </div>
              </Link>
              <div className={styles.itemDetails}>
                <ul>
                  <li>{`${item.category} ${item.name}`}</li>
                  <li>${item.price.toFixed(2)}</li>
                </ul>
                <Link to={`/item/${item.id}`}>
                  <button className={styles.addToCartButton}>
                    <span className={styles.faShoppingCart}>
                      <FontAwesomeIcon icon={faShoppingCart} />
                    </span>
                    ADD TO BAG
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.noItemsFound}>
            <FontAwesomeIcon icon={faShopSlash} />
            <p>Out of Stock</p>
          </div>
        )}
      </div>
      <span>
        <Link className={styles.browseClothing} to="/shopAll">
          {index <= 5 ? "Browse our collection" : ""}
          <span className={styles.faArrowRight}>
            {index <= 5 ? <FontAwesomeIcon icon={faArrowRight} /> : ""}
          </span>
        </Link>
      </span>
    </main>
  );
};

export default Main;
