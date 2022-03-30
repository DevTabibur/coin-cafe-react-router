import {Routes, Route, Link} from 'react-router-dom';
import About from './Components/About/About';
import Coins from './Components/Coins/Coins';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Homepage from './Components/HomePage/HomePage';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer.jsx';

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/coins' element={<Coins/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
