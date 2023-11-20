import { PropTypes } from 'prop-types';


const TaskItem = ({ task, onTaskClick, onRemove }) => {
  return (
    <li>
      <span onClick={() => onTaskClick(task.id)}>
        {task.name} {task.completed ? '(Completada)' : ''}
      </span>
      <button onClick={() => onRemove(task.id)}>Eliminar</button>
      <button onClick={() => onTaskClick(task.id)}>Completar</button>
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

