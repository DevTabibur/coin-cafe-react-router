import {Routes, Route, Link} from 'react-router-dom';
import Homepage from './Components/HomePage/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
      </Routes>
    </>
  );
}

export default App;
