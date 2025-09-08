import { useState } from "react";
import styles from "./Todo.module.scss";

let uniqId = 0;

function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodos([
        ...todos,
        { id: ++uniqId, text: inputValue, completed: false },
      ]);
      setInputValue("");
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const totalTasks = todos.length;
  const completedTasks = todos.filter((todo) => todo.completed).length;
  const remainingTasks = totalTasks - completedTasks;

  return (
    <div className={`${styles.todoContainer} container`}>
      <h2 className={styles.todoAppTitle}>Todo List</h2>

      <form onSubmit={handleSubmit} className={styles.todoInputGroup}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Thêm công việc mới..."
          className={styles.todoInput}
        />
        <button type="submit" className={styles.addButton}>
          Thêm
        </button>
      </form>

      <div className={styles.todoListSection}>
        {todos.length === 0 ? (
          <p className={styles.emptyMessage}>
            🎉 Chưa có công việc nào. Hãy thêm công việc đầu tiên!
          </p>
        ) : (
          <ul className={styles.todoItemsList}>
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`${styles.todoItem} ${
                  todo.completed ? styles.completed : ""
                }`}
              >
                <div className={styles.todoItemLeft}>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleComplete(todo.id)}
                    className={styles.todoCheckbox}
                  />
                  <span className={styles.todoText}>{todo.text}</span>
                </div>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className={styles.deleteButton}
                >
                  Xóa
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={styles.todoStats}>
        <p>
          Tổng: <strong>{totalTasks}</strong> task(s)
        </p>
        <p>
          Hoàn thành: <strong>{completedTasks}</strong> task(s)
        </p>
        <p>
          Còn lại: <strong>{remainingTasks}</strong> task(s)
        </p>
      </div>
    </div>
  );
}

export default Todo;
