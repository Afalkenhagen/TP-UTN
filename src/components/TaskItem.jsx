import { PropTypes } from 'prop-types';

const TaskItem = ({ task, onTaskClick }) => {
  return (
    <li onClick={() => onTaskClick(task.id)}>
      {task.name} {task.completed ? '(Completada)' : ''}
    </li>
  );
};

TaskItem.propTypes = {
  onTaskClick: PropTypes.func.isRequired,
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TaskItem;
