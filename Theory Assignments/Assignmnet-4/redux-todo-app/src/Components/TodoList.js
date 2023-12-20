import React from 'react';
import { connect } from 'react-redux';
import { removeTodo, toggleTodo, updateTodo, duplicateTodo } from '../actions';

const TodoList = ({ todos, dispatch }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <div style={{ textDecoration: todo.completed ? 'line-through' : 'none',margin:40,marginBottom:5 }}>
            {todo.text}
          </div>
          <div>
          <input
            type="text"
            style={{margin:40,marginBottom:5,borderColor:"black",borderRadius:3}}
            placeholder="Update Todo"
            onChange={(e) => dispatch(updateTodo(todo.id, e.target.value))}
          />
          </div>
          <button style={{borderRadius:5,fontWeight:"bold",margin:40}} onClick={() => dispatch(toggleTodo(todo.id))}>Toggle</button>
          <button style={{borderRadius:5,fontWeight:"bold",margin:40}} onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
          <button style={{borderRadius:5,fontWeight:"bold",margin:40}} onClick={() => dispatch(duplicateTodo(todo.id))}>Duplicate</button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(TodoList);
