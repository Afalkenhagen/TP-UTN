import { useState, useEffect } from 'react';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Aquí puedes cargar tus tareas desde una API o base de datos local
    // por ahora, solo definiremos unas tareas de prueba
    setTasks([
      { id: 1, name: 'Tarea 1', completed: false },
      { id: 2, name: 'Tarea 2', completed: true },
      { id: 3, name: 'Tarea 3', completed: false },
    ]);
  }, []);

  const handleTaskClick = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <ul>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onTaskClick={handleTaskClick} />
      ))}
    </ul>
  );
};

export default TaskList;
