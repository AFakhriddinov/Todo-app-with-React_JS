import React from 'react';
import TodoItem from './TodoItem';

export default function TodosList({
  // eslint-disable-next-line react/prop-types
  todosProps,
  handleChange,
  delTodo,
  setUpdate,
}) {
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem
          key={todo.id}
          itemProp={todo}
          handleChange={handleChange}
          delTodo={delTodo}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
}
