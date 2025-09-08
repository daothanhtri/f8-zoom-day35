import { useState } from "react";
import styles from "./Counter.module.scss";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const reset = () => setCount(0);

  const getCountClass = () => {
    if (count > 0) return styles.positive;
    if (count < 0) return styles.negative;
    return styles.zero;
  };

  const getStatusMessage = () => {
    if (count > 0) return "Dương";
    if (count < 0) return "Âm";
    return "Bằng không";
  };

  return (
    <div className={styles.counterContainer}>
      <h2 className={styles.title}>Counter App</h2>
      <div className={`${styles.countDisplay} ${getCountClass()}`}>{count}</div>
      <p className={styles.statusMessage}>{getStatusMessage()}</p>
      <div className={styles.buttonGroup}>
        <button
          onClick={decrement}
          className={`${styles.button} ${styles.decrement}`}
        >
          Giảm (-1)
        </button>
        <button onClick={reset} className={`${styles.button} ${styles.reset}`}>
          Reset (0)
        </button>
        <button
          onClick={increment}
          className={`${styles.button} ${styles.increment}`}
        >
          Tăng (+1)
        </button>
      </div>
    </div>
  );
}

export default Counter;
