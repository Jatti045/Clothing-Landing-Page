import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../module/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingBag,
  faChevronDown,
  faChevronUp,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);

  const toggleShopStatus = () => {
    setIsShopMenuOpen((prevState) => !prevState);
  };

  const closeShopMenu = () => {
    setIsShopMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <FontAwesomeIcon
        icon={isShopMenuOpen ? faTimes : faBars}
        className={styles.hamburgerMenu}
        onClick={toggleShopStatus}
      />
      <Link className={styles.logo} to="/Clothing-Landing-Page/">
        LUNA
      </Link>
      <div className={styles.navRight}>
        <span className={styles.shop} onClick={() => toggleShopStatus()}>
          Shop{" "}
          <FontAwesomeIcon
            icon={isShopMenuOpen ? faChevronUp : faChevronDown}
          />
        </span>
        <span></span>
        <span>
          <Link to="/Clothing-Landing-Page/checkout" className={styles.bagIcon}>
            <FontAwesomeIcon icon={faShoppingBag} />
          </Link>
        </span>
      </div>
      <div
        className={styles.browseItems}
        style={{
          display: isShopMenuOpen ? "block" : "none",
        }}
      >
        <ul>
          <li>
            <Link onClick={closeShopMenu} to="/Clothing-Landing-Page/shopAll">
              Shop All
            </Link>
          </li>
          <li>
            <Link
              onClick={closeShopMenu}
              to="/Clothing-Landing-Page/shopAll?category=mens"
            >
              Men's
            </Link>
          </li>
          <li>
            <Link
              onClick={closeShopMenu}
              to="/Clothing-Landing-Page/shopAll?category=womens"
            >
              Women's
            </Link>
          </li>
          <li>
            <Link
              onClick={closeShopMenu}
              to="/Clothing-Landing-Page/shopAll?category=unisex"
            >
              Unisex
            </Link>
          </li>
          <li>
            <Link
              onClick={closeShopMenu}
              to="/Clothing-Landing-Page/shopAll?category=shirts"
            >
              Shirts
            </Link>
          </li>
          <li>
            <Link
              onClick={closeShopMenu}
              to="/Clothing-Landing-Page/shopAll?category=pants"
            >
              Pants
            </Link>
          </li>
          <li>
            <Link
              onClick={closeShopMenu}
              to="/Clothing-Landing-Page/shopAll?category=shorts"
            >
              Shorts
            </Link>
          </li>
          <li>
            <Link
              onClick={closeShopMenu}
              to="/Clothing-Landing-Page/shopAll?category=hoodies"
            >
              Hoodies
            </Link>
          </li>
          <li>
            <Link
              onClick={closeShopMenu}
              to="/Clothing-Landing-Page/shopAll?category=jackets"
            >
              Jackets
            </Link>
          </li>
          <li>
            <Link
              onClick={closeShopMenu}
              to="/Clothing-Landing-Page/shopAll?category=underwear"
            >
              Underwear
            </Link>
          </li>
          <li>
            <Link
              onClick={closeShopMenu}
              to="/Clothing-Landing-Page/shopAll?category=accessories"
            >
              Accessories
            </Link>
          </li>
          <li>
            <Link
              onClick={closeShopMenu}
              to="/Clothing-Landing-Page/shopAll?category=socks"
            >
              Socks
            </Link>
          </li>
          <li>
            <Link
              onClick={closeShopMenu}
              to="/Clothing-Landing-Page/shopAll?category=footwear"
            >
              Footwear
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
