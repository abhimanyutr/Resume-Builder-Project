import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';

import Landingpage from './pages/Landingpage';
import Resumegenerator from './pages/Resumegenerator';
import Form from './components/Form';        
import History from './pages/History';        
import Pagenotfound from './pages/Pagenotfound';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Landingpage/>} />
        <Route path='/resume' element={<Resumegenerator/>} />
        <Route path='/form' element={<Form/>} />
        <Route path='/history' element={<History/>} />
        <Route path='/*' element={<Pagenotfound/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App;
