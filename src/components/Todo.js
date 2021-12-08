import React from "react";
import PropTypes from "prop-types";

const Todo = ({ triggerToggleDispatch, completed, text }) => (
  <li
    onClick={triggerToggleDispatch}
    style={{
      textDecoration: completed ? "line-through" : "none",
    }}
  >
    {text}
  </li>
);



export default Todo;
