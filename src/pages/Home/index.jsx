import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.title}>Chào mừng đến với F8 React Day 35</h1>
      <div className={styles.linksGrid}>
        <Link to="/counter" className={styles.linkItem}>
          Counter App
        </Link>
        <Link to="/todo" className={styles.linkItem}>
          Todo List App
        </Link>
        <Link to="/profile" className={styles.linkItem}>
          Profile Card
        </Link>
        <Link to="/products" className={styles.linkItem}>
          Product List
        </Link>
        <Link to="/comments" className={styles.linkItem}>
          Comment System
        </Link>
        <Link to="/weather" className={styles.linkItem}>
          Weather App
        </Link>
        <Link to="/buttons" className={styles.linkItem}>
          Button Demo
        </Link>
      </div>
    </div>
  );
}

export default Home;
