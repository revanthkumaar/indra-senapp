
let nextTodoId = 0;

export const addTodo = (text) => {
    return {
      type: "ADD_TODO",
      id: nextTodoId++,
      todotext: text,
    };
}

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  taskid: id
})