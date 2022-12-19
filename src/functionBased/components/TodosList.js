import React from 'react';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  const properties = props;
  return (
    <ul>
      {properties.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={properties.handleChangeProps}
          deleteTodoProps={properties.deleteTodoProps}
          setUpdate={properties.setUpdate}
        />
      ))}
    </ul>
  );
};

export default TodosList;
