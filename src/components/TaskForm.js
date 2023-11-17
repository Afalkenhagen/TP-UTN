import React, { useState } from 'react';

const TaskForm = ({ onTaskAdd }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onTaskAdd(taskName);
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={taskName} 
        onChange={e => setTaskName(e.target.value)} 
      />
      <button type="submit">Añadir tarea</button>
    </form>
  );
};

export default TaskForm;
