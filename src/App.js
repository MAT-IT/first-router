
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <div >
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li >
              <Link to="/Contact">Contact</Link>
            </li>

          </ul>
        </nav>
        <hr />
        <Route exact path='/' component={Home} />
        <Route path='/About' component={About} />
        <Route path='/Contact' component={Contact} />


      </BrowserRouter>
    </div>
  );
}

export default App;
