import React from "react";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

const TaskComp = () => {
  return (
    <div>
      <p>task Comp component</p>
<AddTodo/>
<VisibleTodoList/>
      
    </div>
  );
};

export default TaskComp;
