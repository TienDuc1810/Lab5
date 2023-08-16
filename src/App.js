import './App.css';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import DashBoard from './Pages/DashBoard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/dashboard/*' element={<DashBoard />}></Route>
      </Routes>
    </div >
  );
}

export default App;
