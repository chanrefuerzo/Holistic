import './App.css';
import Navbar from './components/navbar/Navbar';
import HeroSection from './components/hero/HeroSection';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Services from './Pages/Services';
import Products from './Pages/Products';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <div >
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/sign-up' element={<SignUp/>} />

        </Routes>
      </Router>
  
    </div>
  );
}

export default App;
