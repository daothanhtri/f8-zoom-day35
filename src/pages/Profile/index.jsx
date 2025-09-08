import { useState, useEffect } from "react";
import styles from "./Profile.module.scss";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const defaultAvatarUrl =
    "https://adventuretime.popgeeks.com/wp-content/uploads/2023/11/finn-the-human-adventure-time-gigapixel-lines-1024x576-1024x585.webp";

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className={`container ${styles.profileContainer}`}>
        <h2 className={styles.profileAppTitle}>Profile Card</h2>
        <p className="loading-message">Đang tải thông tin hồ sơ...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className={`container ${styles.profileContainer}`}>
        <h2 className={styles.profileAppTitle}>Profile Card</h2>
        <p className="loading-message">Không tìm thấy thông tin người dùng.</p>
      </div>
    );
  }

  return (
    <div className={`container ${styles.profileContainer}`}>
      <h2 className={styles.profileAppTitle}>Profile Card</h2>
      <div className={styles.profileCard}>
        <div className={styles.profileHeader}>
          <div className={styles.profileAvatarWrapper}>
            <img
              src={defaultAvatarUrl}
              alt="User Avatar"
              className={styles.profileAvatar}
            />
          </div>
          <h3 className={styles.profileName}>{user.name}</h3>
          <p className={styles.profileUsername}>@{user.username}</p>
        </div>

        <div className={styles.profileDetailsGrid}>
          <div className={styles.detailItem}>
            <span className={styles.detailIcon}>✉️</span>
            <div className={styles.detailContent}>
              <span className={styles.detailLabel}>Email:</span>
              <a href={`mailto:${user.email}`} className={styles.detailValue}>
                {user.email}
              </a>
            </div>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailIcon}>📞</span>
            <div className={styles.detailContent}>
              <span className={styles.detailLabel}>Phone:</span>
              <span className={styles.detailValue}>{user.phone}</span>
            </div>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailIcon}>🌐</span>
            <div className={styles.detailContent}>
              <span className={styles.detailLabel}>Website:</span>
              <a
                href={`http://${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.detailValue}
              >
                {user.website}
              </a>
            </div>
          </div>
          <div className={`${styles.detailItem} ${styles.fullWidth}`}>
            <span className={styles.detailIcon}>📍</span>
            <div className={styles.detailContent}>
              <span className={styles.detailLabel}>Address:</span>
              <span className={styles.detailValue}>
                {user.address.street}, {user.address.suite}, {user.address.city}
                , {user.address.zipcode}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
