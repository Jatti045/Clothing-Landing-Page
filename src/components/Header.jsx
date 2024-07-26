import { Link } from "react-router-dom";
import styles from "../module/Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerContainerTextBtn}>
          <p>Welcome to Luna</p>
          <h1>Luna: Timeless Elegance, Modern Style</h1>
          <Link to="/shopAll">
            <button>Shop all</button>
          </Link>
        </div>
      </div>
      <div className={styles.spaceContainer}></div>
    </header>
  );
};

export default Header;
