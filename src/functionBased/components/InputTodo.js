import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = (props) => {
  const [title, setTitle] = useState('');

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    const add = props;
    e.preventDefault();
    if (title.trim()) {
      add.addTodoProps(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={title}
        name="title"
        onChange={onChange}
      />
      <button
        aria-label="Submit"
        type="button"
        className="input-submit"
        onClick={handleSubmit}
      >
        <FaPlusCircle />
      </button>
    </form>
  );
};

export default InputTodo;
