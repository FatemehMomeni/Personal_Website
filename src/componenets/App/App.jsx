import './App.css';
import {
  BrowserRouter, Route, Routes,
} from 'react-router';
import Home from '../Home/Home';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';


const App = () =>  {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/portfolio' element={<Portfolio />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
      </BrowserRouter>       
    </div>
  );
}

export default App;
