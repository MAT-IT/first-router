
import './App.css';
import { BrowserRouter, Route, Link , Switch} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound'
import Programs from './components/Programs';


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
            <li>
              <Link to="/Programs">Programs</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/About' component={About} />
        <Route path='/Contact' component={Contact} />
        <Route path='/Programs' component={Programs}/>
        <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
