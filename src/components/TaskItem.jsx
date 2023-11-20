import { PropTypes } from 'prop-types';


const TaskItem = ({ task, onTaskClick, onRemove }) => {
  return (
    <li className="p-2 mb-2 border-2 border-gray-300 rounded flex justify-between items-center">
      <span 
        onClick={() => onTaskClick(task.id)} 
        className={`flex-grow cursor-pointer ${task.completed ? 'line-through text-gray-500' : ''}`}
      >
        {task.name}
      </span>
      <div>
        <button 
          onClick={() => onTaskClick(task.id)} 
          className="p-1 bg-green-500 hover:bg-green-700 text-white font-bold rounded mr-2"
        >
          Completar
        </button>
        <button 
          onClick={() => onRemove(task.id)} 
          className="p-1 bg-red-500 hover:bg-red-700 text-white font-bold rounded"
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

TaskItem.propTypes = {
  onTaskClick: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TaskItem;

