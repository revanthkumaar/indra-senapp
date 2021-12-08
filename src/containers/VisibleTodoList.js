import React from 'react';
import {connect} from 'react-redux'
import TodoList from '../components/TodoList'
import {toggleTodo} from '../actions/index.js'

const getVisibleTodos = (todos) => {
    console.log(todos)
    return todos;
 
};


const mapStateToProps = state => ({
   todos: getVisibleTodos(state.todos)
})

const mapDispatchToProps = (dispatch) => ({
  toggleTodoTrigger: id => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);