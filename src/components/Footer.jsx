import styles from "../module/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h2>About Luna</h2>
          <p>
            Luna offers timeless elegance and modern style. We provide exclusive
            pricing and dedicated support for a seamless shopping experience.
          </p>
        </div>
        <div className={styles.footerSection}>
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#index.html">Home</a>
            </li>
            <li>
              <a href="#shop">Shop</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h2>Contact Us</h2>
          <ul>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />{" "}
              123 Fashion St, Toronto, ON
            </li>
            <li>
              <FontAwesomeIcon icon={faPhoneAlt} className={styles.icon} /> +1
              (123) 456-7890
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />{" "}
              support@luna.com
            </li>
          </ul>
        </div>
        <div className={`${styles.footerSection} ${styles.social}`}>
          <h2>Follow Us</h2>
          <a href="#">
            <FontAwesomeIcon icon={faFacebookF} className={styles.icon} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faPinterest} className={styles.icon} />
          </a>
        </div>
      </div>
      <div className={styles.footerCopyright}>
        <p>&copy; 2024 James Attia, All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
