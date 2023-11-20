import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import TaskList from './TaskList';
import TaskForm from './TaskForm';


const TasksManager = () => {
  const navigate = useNavigate();
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

  <button onClick={() => navigate('/')} className="w-full p-2 bg-red-500 hover:bg-red-700 text-white font-bold rounded">Volver al inicio</button>


  return (
    <div>
      <TaskForm onTaskAdd={addTask} />
      <TaskList tasks={tasks} onTaskClick={toggleTaskCompleted} onRemove={removeTask} />
      <button onClick={() => navigate('/')} className="w-full p-2 bg-red-500 hover:bg-red-700 text-white font-bold rounded">Volver al inicio</button>
    </div>
  );
};

export default TasksManager;
