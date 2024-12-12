import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.scss';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './components/frontend/Home';
import About from './components/frontend/About';
import Services from './components/frontend/Services';
import Contact_us from './components/frontend/Contact_us';
import Projects from './components/frontend/Projects';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contact_us' element={<Contact_us/>} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
