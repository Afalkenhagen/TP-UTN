import { useState } from 'react';
import PropTypes from 'prop-types';

const TaskForm = ({ onTaskAdd }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onTaskAdd(taskName);
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input 
        type="text" 
        value={taskName} 
        onChange={e => setTaskName(e.target.value)} 
        className="w-full p-2 mb-2 border-2 border-gray-300 rounded" 
        placeholder="Nueva tarea"
      />
      <button type="submit" className="w-full p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">Añadir tarea</button>
    </form>
  );
}

TaskForm.propTypes = {
  onTaskAdd: PropTypes.func.isRequired,
};

export default TaskForm;
