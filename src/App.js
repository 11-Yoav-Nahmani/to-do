import { Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import './App.css';

function App() {
  return (
    <div className='container'>
      <ul>
        <li>
        <Link to="/">main</Link>
        </li>
        <li>
        <Link to="about">about</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
