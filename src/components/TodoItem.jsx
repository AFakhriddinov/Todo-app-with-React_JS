import React, { useState } from 'react';
import styles from '../styles/TodoItem.module.css';

export default function TodoItem({
  // eslint-disable-next-line react/prop-types
  itemProp,
  handleChange,
  delTodo,
  setUpdate,
}) {
  const [editing, setEditing] = useState(false);
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  const handleEditing = () => {
    setEditing(true);
  };
  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };
  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          // eslint-disable-next-line react/prop-types
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <button onClick={handleEditing} type="button">
          Edit
        </button>
        <button type="button" onClick={() => delTodo(itemProp.id)}>
          Delete
        </button>
        <span style={itemProp.completed ? completedStyle : null} />
        {itemProp.title}
      </div>
      <input
        type="text"
        value={itemProp.title}
        className={styles.textInput}
        style={editMode}
        // onChange={(e) => console.log(e.target.value, itemProp.id)}
        onChange={(e) => setUpdate(e.target.value, itemProp.id)}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
}
