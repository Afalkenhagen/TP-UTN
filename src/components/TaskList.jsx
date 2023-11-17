import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onTaskClick, onRemove }) => {
  const [localTasks, setLocalTasks] = useState([]);

  useEffect(() => {
    setLocalTasks(tasks);
  }, [tasks]);

  const handleTaskClick = (taskId) => {
    setLocalTasks(localTasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
    onTaskClick(taskId);
  };

  return (
    <ul>
      {localTasks.map(task => (
        <TaskItem key={task.id} task={task} onTaskClick={handleTaskClick} onRemove={onRemove} />
      ))}
    </ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onTaskClick: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default TaskList;


