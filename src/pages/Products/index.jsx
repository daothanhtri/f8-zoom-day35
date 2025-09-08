import { useState, useEffect } from "react";
import styles from "./Products.module.scss";

function capitalizeFirstLetter(string) {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function truncateText(text, maxLength) {
  if (!text || text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + "...";
}

function Products() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, []);

  const openModal = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  if (loading) {
    return (
      <div className={`container ${styles.productsContainer}`}>
        <h2 className={styles.productsAppTitle}>Products Post</h2>
        <p className="loading-message">Đang tải...</p>
      </div>
    );
  }

  return (
    <div className={`container ${styles.productsContainer}`}>
      <h2 className={styles.productsAppTitle}>Products Post</h2>
      <div className={styles.productGrid}>
        {posts.map((post) => (
          <div key={post.id} className={styles.productCard}>
            <div>
              <h4 className={styles.cardTitle}>
                {post.id}. {capitalizeFirstLetter(post.title)}
              </h4>
              <p className={styles.cardBody}>{truncateText(post.body, 100)}</p>
            </div>
            <div className={styles.actions}>
              <button
                onClick={() => openModal(post)}
                className={styles.detailButton}
              >
                Xem chi tiết
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedPost && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button className={styles.closeButton} onClick={closeModal}>
              &times;
            </button>
            <h3 className={styles.modalTitle}>
              {capitalizeFirstLetter(selectedPost.title)}
            </h3>
            <p className={styles.modalPostId}>
              <strong>ID:</strong> {selectedPost.id}
            </p>
            <p className={styles.modalPostBody}>{selectedPost.body}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
