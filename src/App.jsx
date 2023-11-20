import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TasksManager from './components/TasksManager';
import Bienvenida from './components/Bienvenida';
import './App.css'

function App() {
  return (
    <Router>
     <Routes>
       <Route path="/" element={<Bienvenida />} />
       <Route path="/app" element={<TasksManager />} />
     </Routes>
   </Router>
  );
}

export default App
