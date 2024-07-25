import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "../module/BackArrow.module.css";

const BackArrow = () => {
  const history = useNavigate();

  return (
    <span className={styles.arrowBack} onClick={() => history(-1)}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </span>
  );
};

export default BackArrow;
