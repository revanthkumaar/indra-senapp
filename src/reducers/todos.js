
const todos = (state=[],action) => {

    switch(action.type){
        case "ADD_TODO":
            return [
              ...state,
              {
                id: action.id,
                text: action.todotext,
                completed: false,
              },
            ];
          case "TOGGLE_TODO":
           return state.map(todo => 

              (todo.id === action.taskid) ? {...todo, completed: !todo.completed} : todo

            )

            default: return state;
    }
}

export default todos;