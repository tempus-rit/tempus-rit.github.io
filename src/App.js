import './App.css';
import HomePage from './pages/home/HomePage';
import FourUpsPage from './pages/4ups/FourUpsPage';
import NavBar from './components/NavBar';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HashRouter basename='/'>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/4ups' element={<FourUpsPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
