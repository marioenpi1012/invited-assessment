import logo from './logo.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/Home/Landing'
import Event from './pages/event/Event'
function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='event' element={<Event />} />
        </Routes>
    </div>
  );
}

export default App;
