import React from 'react';

const TaskItem = ({ task, onTaskClick }) => {
  return (
    <li onClick={() => onTaskClick(task.id)}>
      {task.name} {task.completed ? '(Completada)' : ''}
    </li>
  );
};

export default TaskItem;
