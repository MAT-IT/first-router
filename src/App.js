
import './App.css';
import {BrowserRouter , Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <div >
      <BrowserRouter>

        <Route path='/' component={Home}/>
        <Route path='/About' component={About}/>
        <Route path='/Contact' component={Contact}/>


      </BrowserRouter>
    </div>
  );
}

export default App;
