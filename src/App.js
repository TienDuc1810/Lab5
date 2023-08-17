import './App.css';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import DashBoard from './Pages/DashBoard';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import LandingPages from './Components/LandingPages/LandingPage/LandingPages';
library.add(fab, far, fas);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/dashboard/*' element={<DashBoard />}></Route>
        <Route path='/dashboard/LandingPages' element={<LandingPages/>} />
      </Routes>

    </div >
  );
}

export default App;
