import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const TasksManager = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    try {
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch (error) {
      console.error('Error al analizar el JSON de las tareas:', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error('Error al guardar las tareas en el almacenamiento local:', error);
    }
  }, [tasks]);

  const addTask = (taskName) => {
    const newTask = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      name: taskName,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompleted = (taskId) => {
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <div>
      <TaskForm onTaskAdd={addTask} />
      <TaskList tasks={tasks} onTaskClick={toggleTaskCompleted} onRemove={removeTask} />
      <button onClick={handleNavigate} className="w-full p-2 bg-red-500 hover:bg-red-700 text-white font-bold rounded">Volver al inicio</button>
    </div>
  );
};

export default TasksManager;
