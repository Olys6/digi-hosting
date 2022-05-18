import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js'
import Home from './components/Home'
import WebHosting from './components/webhosting-pages/WebHosting.js';
AOS.init();

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='web-hosting' element={<WebHosting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
