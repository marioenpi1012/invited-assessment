import logo from './logo.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/Home/Landing'
function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
