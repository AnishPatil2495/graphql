import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import Router from './services/Router';

function App() {
  return (
    <div className="App">
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
