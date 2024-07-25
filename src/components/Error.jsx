import styles from "../module/Error.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const Error = () => {
  return (
    <div className={styles.errorContainer}>
      <span className={styles.errorIcon}>
        {<FontAwesomeIcon icon={faExclamationTriangle} />}
      </span>
      <h1 className={styles.errorMessage}>404 Error - Page Not Found</h1>
    </div>
  );
};

export default Error;
