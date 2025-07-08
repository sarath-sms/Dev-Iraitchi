import Home from './pages/home';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </>
  )
}

export default App
