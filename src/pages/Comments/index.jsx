import { useState, useEffect } from "react";
import styles from "./Comments.module.scss";

const fakeTimeAgo = () => {
  const random = Math.random();
  if (random < 0.3) return "Vài phút trước";
  if (random < 0.6) return "2 giờ trước";
  if (random < 0.9) return "1 ngày trước";
  return "3 ngày trước";
};

let commentUniqId = 1000;

function Comments() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newCommentName, setNewCommentName] = useState("");
  const [newCommentEmail, setNewCommentEmail] = useState("");
  const [newCommentBody, setNewCommentBody] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then((response) => response.json())
      .then((data) => {
        const commentsWithTime = data.map((comment) => ({
          ...comment,
          timeAgo: fakeTimeAgo(),
        }));
        setComments(commentsWithTime);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
        setLoading(false);
      });
  }, []);

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (
      newCommentName.trim() &&
      newCommentEmail.trim() &&
      newCommentBody.trim()
    ) {
      const newComment = {
        id: ++commentUniqId,
        name: newCommentName,
        email: newCommentEmail,
        body: newCommentBody,
        timeAgo: "Vừa gửi",
      };
      setComments([newComment, ...comments]);
      setNewCommentName("");
      setNewCommentEmail("");
      setNewCommentBody("");
    } else {
      alert("Vui lòng điền đầy đủ thông tin bình luận.");
    }
  };

  if (loading) {
    return (
      <div className={`container ${styles.commentsContainer}`}>
        <h2 className={styles.commentsAppTitle}>Comment System</h2>
        <p className="loading-message">Đang tải bình luận...</p>
      </div>
    );
  }

  return (
    <div className={`container ${styles.commentsContainer}`}>
      <h2 className={styles.commentsAppTitle}>Comment System</h2>

      <div className={styles.commentForm}>
        <h3 className={styles.formTitle}>Thêm bình luận mới</h3>
        <form onSubmit={handleSubmitComment}>
          <label htmlFor="name" className={styles.formLabel}>
            Tên:
          </label>
          <input
            id="name"
            type="text"
            value={newCommentName}
            onChange={(e) => setNewCommentName(e.target.value)}
            placeholder="Nhập tên của bạn"
            required
            className={styles.formInput}
          />
          <label htmlFor="email" className={styles.formLabel}>
            Email:
          </label>
          <input
            id="email"
            type="email"
            value={newCommentEmail}
            onChange={(e) => setNewCommentEmail(e.target.value)}
            placeholder="Nhập email của bạn"
            required
            className={styles.formInput}
          />
          <label htmlFor="body" className={styles.formLabel}>
            Nội dung:
          </label>
          <textarea
            id="body"
            value={newCommentBody}
            onChange={(e) => setNewCommentBody(e.target.value)}
            placeholder="Nhập bình luận của bạn"
            rows="4"
            required
            className={styles.formTextarea}
          ></textarea>
          <button type="submit" className={styles.submitButton}>
            Gửi bình luận
          </button>
        </form>
      </div>

      <div className={styles.commentList}>
        <h3 className={styles.commentListTitle}>Các bình luận</h3>
        {comments.length === 0 ? (
          <p className={styles.emptyMessage}>Chưa có bình luận nào.</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className={styles.commentItem}>
              <img
                src={`https://ui-avatars.com/api/?name=${comment.name}&background=random&size=60`}
                alt="Avatar"
                className={styles.commentAvatar}
              />
              <div className={styles.commentDetails}>
                <div className={styles.commentHeader}>
                  <strong className={styles.commentName}>{comment.name}</strong>
                  <span className={styles.commentTime}>{comment.timeAgo}</span>
                </div>
                <p className={styles.commentEmail}>{comment.email}</p>
                <p className={styles.commentBody}>{comment.body}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Comments;
