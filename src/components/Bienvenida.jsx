import { Link } from 'react-router-dom';

const Bienvenida = () => {
 return (
   <div className="flex items-center justify-center min-h-screen bg-gray-100">
     <div className="w-full max-w-md p-8 m-4 bg-white rounded shadow-md">
       <h1 className="text-center text-2xl mb-4">Bienvenido a la ToDo List App</h1>
       <Link to="/app" className="w-full p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">Ir a la aplicación</Link>
     </div>
   </div>
 );
};

export default Bienvenida;
