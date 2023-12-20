import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div>
      <input style={{margin:40,borderColor:"black",borderRadius:3}} placeholder="Add Some text" type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button style={{borderRadius:5,fontWeight:"bold",}} onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default connect()(AddTodo);
