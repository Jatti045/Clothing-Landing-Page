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
  {
    isShopMenuOpen
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
  }

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
      <Link className={styles.logo} to="/">
        LUNA
      </Link>
      <div className={styles.navRight}>
        <span className={styles.shop} onClick={() => toggleShopStatus()}>
          Shop{" "}
          <FontAwesomeIcon
            icon={isShopMenuOpen ? faChevronUp : faChevronDown}
          />
        </span>
        <span>
          <Link to="/checkout" className={styles.bagIcon}>
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
            <Link onClick={closeShopMenu} to="/shopAll">
              Shop All
            </Link>
          </li>
          <li>
            <Link onClick={closeShopMenu} to="/shopAll?category=mens">
              Men's
            </Link>
          </li>
          <li>
            <Link onClick={closeShopMenu} to="/shopAll?category=womens">
              Women's
            </Link>
          </li>
          <li>
            <Link onClick={closeShopMenu} to="/shopAll?category=unisex">
              Unisex
            </Link>
          </li>
          <li>
            <Link onClick={closeShopMenu} to="/shopAll?category=shirts">
              Shirts
            </Link>
          </li>
          <li>
            <Link onClick={closeShopMenu} to="/shopAll?category=pants">
              Pants
            </Link>
          </li>
          <li>
            <Link onClick={closeShopMenu} to="/shopAll?category=shorts">
              Shorts
            </Link>
          </li>
          <li>
            <Link onClick={closeShopMenu} to="/shopAll?category=hoodies">
              Hoodies
            </Link>
          </li>
          <li>
            <Link onClick={closeShopMenu} to="/shopAll?category=jackets">
              Jackets
            </Link>
          </li>
          <li>
            <Link onClick={closeShopMenu} to="/shopAll?category=underwear">
              Underwear
            </Link>
          </li>
          <li>
            <Link onClick={closeShopMenu} to="/shopAll?category=accessories">
              Accessories
            </Link>
          </li>
          <li>
            <Link onClick={closeShopMenu} to="/shopAll?category=socks">
              Socks
            </Link>
          </li>
          <li>
            <Link onClick={closeShopMenu} to="/shopAll?category=footwear">
              Footwear
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
