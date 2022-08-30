import Navbar from './components/Navbar';
import Footer from './components/Footer'
import  Roadmap from './components/Roadmap'
import './App.css';

function App() {
  return (
    <div className='app'>
      <header>
      <Navbar />
      </header>
      <main>Main</main>
      <Roadmap/>
      <Footer />
    </div>
  );
}

export default App;
