import './App.css';
import HomePage from './pages/home/HomePage';
import FourUpsPage from './pages/4ups/FourUpsPage';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/4ups' element={<FourUpsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
