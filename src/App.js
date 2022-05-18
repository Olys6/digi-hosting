import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js'
import Home from './components/Home'
AOS.init();

function App() {
  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/web-hosting' element={<Home />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
