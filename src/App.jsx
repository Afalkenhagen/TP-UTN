import { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Tarea 1', completed: false },
    { id: 2, name: 'Tarea 2', completed: true },
    { id: 3, name: 'Tarea 3', completed: false },
  ]);

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
    <div className="App">
      <TaskForm onTaskAdd={addTask} />
      <TaskList tasks={tasks} onTaskClick={toggleTaskCompleted} onRemove={removeTask} />
    </div>
  );
}

export default App
