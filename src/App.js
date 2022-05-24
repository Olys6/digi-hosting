import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js'
import Home from './components/Home'
import WebHosting from './components/webhosting-pages/WebHosting';
import Page404 from './components/Page404.js'
import Footer from './components/Footer';

AOS.init();

function App() {
  return (
    <div>
      <NavBar />
      {/* <div style={{ height: "3.8rem" }}></div> */}
      <Routes>
        <Route path="/digi-hosting/" element={ <Home /> } />
        <Route path="/digi-hosting/web-hosting/" element={ <WebHosting/> } />
        <Route path='*' element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
