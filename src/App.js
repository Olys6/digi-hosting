import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js'
import Home from './components/Home'
import WebHosting from './components/webhosting-pages/WebHosting';
AOS.init();

function App() {
  return (
    <div>
      <NavBar />
      {/* <div style={{ height: "3.8rem" }}></div> */}
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='web-hosting' element={ <WebHosting/> } />
      </Routes>
    </div>
  );
}

export default App;
