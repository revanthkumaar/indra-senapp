import React from "react";
import Todo from "./Todo";
import PropTypes from "prop-types";

const TodoList = ({ todos, toggleTodoTrigger}) => {
  console.log(todos);
  return (
    <ul>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          {...todo}
          triggerToggleDispatch ={() => toggleTodoTrigger(todo.id)}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default TodoList;
