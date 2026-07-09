import './App.css';
import NavBar from './components/common/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FotterSection from './components/common/FotterSection';
import { AppContext } from './context/AppContext';
import { useContext } from 'react';







function App() {

  const { theme } = useContext(AppContext)
  
  return (
    <div className={`min-h-screen overflow-x-hidden
    ${theme === "light" ? "bg-white" : "bg-richblack-900"}`}>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <FotterSection/>

      
    </div>
  );
}

export default App;
