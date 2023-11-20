import { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const TasksManager = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskName) => {
    setTasks([...tasks, { id: tasks.length + 1, name: taskName, completed: false }]);
  };

  const toggleTaskCompleted = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div>
      <TaskForm onTaskAdd={addTask} />
      <TaskList tasks={tasks} onTaskClick={toggleTaskCompleted} onRemove={removeTask} />
    </div>
  );
};

export default TasksManager;
