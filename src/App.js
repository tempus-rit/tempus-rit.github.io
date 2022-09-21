import './App.css';
import HomePage from './pages/home/HomePage';
import FourUpsPage from './pages/4ups/FourUpsPage';
import TimeTrackingPage from './pages/timeTracking/TimeTrackingPage';
import NavBar from './components/NavBar';
import { HashRouter, Routes, Route } from 'react-router-dom';
import DomainModelPage from './pages/DomainModelPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HashRouter basename='/'>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/4ups' element={<FourUpsPage />} />
          <Route path='/time-tracking' element={<TimeTrackingPage />} />
          <Route path='/domain-model' element={<DomainModelPage/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
