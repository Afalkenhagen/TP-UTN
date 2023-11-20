import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TasksManager from './components/TasksManager';
import Bienvenida from './components/Bienvenida';
import './App.css'

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Bienvenida />} />
      <Route path="/app" element={
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="w-full max-w-md p-8 m-4 bg-white rounded shadow-md">
            <TasksManager />
          </div>
        </div>
      } />
    </Routes>
  </Router>
  );
 }

export default App
