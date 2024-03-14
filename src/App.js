
import './App.css';
import { Home } from './Home';
import { About } from './About';
import { Route, Routes, NavLink } from 'react-router-dom';
import {Sidebar} from './Sidebar';
function App() {
  return (
    <>


      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Ensayando</NavLink>
            </li>
            <li>
              <NavLink to="/about">Caja 2</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        </Routes>
      </div>
    
    </>
  );
}

export default App;


