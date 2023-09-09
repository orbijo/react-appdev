import logo from './logo.svg';
import './App.css';
import './templates/Header'
import './templates/Footer'
import Header from './templates/Header';
import Footer from './templates/Footer';

function App() {
  return (
    <div className="App flex flex-col h-screen justify-between">
      <Header></Header>
        
      <Footer></Footer>
    </div>
  );
}

export default App;
