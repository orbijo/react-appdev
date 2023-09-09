import logo from './logo.svg';
import './App.css';
import './templates/Header'
import './templates/Footer'
import Header from './templates/Header';
import Footer from './templates/Footer';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Tools from './components/Tools'

function App() {

  return (
    <div className="App flex flex-col h-screen justify-between">
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/tools" element={<Tools />} /> */}
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
