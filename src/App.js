import './App.css';
import { Footer } from './Component/Footer';
import { Navbar } from './Component/Navbar';
import { Landing } from './Landing';

function App() {
  return (
    <div className='app'>
       <Navbar/>
         <Landing/>
         <Footer/>
    </div>
  );
}

export default App;
