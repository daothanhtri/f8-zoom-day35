import { useState } from "react";
import Button from "../../components/Button";
import styles from "./Buttons.module.scss";

function Buttons() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("Loading finished!");
    }, 2000);
  };

  return (
    <div className={`container ${styles.buttonsContainer}`}>
      <h1 className={styles.title}>Buttons Demo</h1>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>1. Basic Buttons</h2>
        <div className={styles.buttonGrid}>
          <Button className={styles.exampleButton}>Click Me</Button>
          <Button primary className={styles.exampleButton}>
            Primary Button
          </Button>
          <Button bordered className={styles.exampleButton}>
            Bordered Button
          </Button>
          <Button rounded className={styles.exampleButton}>
            Rounded Button
          </Button>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>2. Link Buttons</h2>
        <div className={styles.buttonGrid}>
          <Button
            href="https://google.com"
            target="_blank"
            className={styles.exampleButton}
          >
            Go to Google
          </Button>
          <Button
            href="https://facebook.com"
            primary
            rounded
            className={styles.exampleButton}
          >
            Facebook Link
          </Button>
          <Button
            href="https://fullstack.edu.vn"
            primary
            rounded
            className={styles.exampleButton}
          >
            Go to F8
          </Button>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>3. Button Sizes</h2>
        <div className={styles.buttonGrid}>
          <Button small className={styles.exampleButton}>
            Small
          </Button>
          <Button medium className={styles.exampleButton}>
            Medium
          </Button>
          <Button large className={styles.exampleButton}>
            Large
          </Button>
          <Button primary large rounded className={styles.exampleButton}>
            Large Primary Rounded
          </Button>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>4. Disabled State</h2>
        <div className={styles.buttonGrid}>
          <Button disabled className={styles.exampleButton}>
            Disabled Button
          </Button>
          <Button primary disabled className={styles.exampleButton}>
            Primary Disabled
          </Button>
          <Button href="#" disabled className={styles.exampleButton}>
            Disabled Link
          </Button>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>5. Loading State</h2>
        <div className={styles.buttonGrid}>
          <Button
            loading={isLoading}
            onClick={handleLoadingClick}
            primary
            className={styles.exampleButton}
          >
            {isLoading ? "Đang tải..." : "Bắt đầu tải"}
          </Button>
          <Button loading={true} bordered className={styles.exampleButton}>
            Loading
          </Button>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>6. With Icons / Children</h2>
        <div className={styles.buttonGrid}>
          <Button primary className={styles.exampleButton}>
            <span>📧</span> Send Email
          </Button>
          <Button bordered large className={styles.exampleButton}>
            <span>➕</span> Add Item
          </Button>
          <Button rounded className={styles.exampleButton}>
            ⚙️ Settings
          </Button>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>7. Custom onClick</h2>
        <div className={styles.buttonGrid}>
          <Button
            onClick={() => alert("Button Clicked!")}
            className={styles.exampleButton}
          >
            Click for Alert
          </Button>
          <Button
            primary
            onClick={() => console.log("Console Log!")}
            className={styles.exampleButton}
          >
            Click for Console
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
