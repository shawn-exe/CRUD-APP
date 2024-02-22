import './App.css';
import Navbar from './components/Navbar';
import HomeContent from './components/HomeContent';
import AddUsers from './components/AddUsers';
import AllUsers from './components/AllUsers';
import {BrowserRouter,Routes, Route} from 'react-router-dom';//This is mandatory for Routing.
function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes> 
        <Route path='/' element={<HomeContent />} />
        <Route path='/AddUsers' element={<AddUsers />} />
        <Route path='/AllUsers' element={<AllUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
