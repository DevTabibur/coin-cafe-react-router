import {Routes, Route, Link} from 'react-router-dom';
import Header from './Components/Header/Header';
import Homepage from './Components/HomePage/HomePage';

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
      </Routes>
    </>
  );
}

export default App;
