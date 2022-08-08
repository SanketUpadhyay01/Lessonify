import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Screening from './pages/Screening'
import Header from './components/Header'
import Footer from './components/Footer'
import Assessment from './pages/assesment/Assessment'
import Spelling from './pages/assesment/pages/spelling/Spelling'


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact element={<Landing />}></Route>
        <Route path="/home" exact element={<Landing />}></Route>
        <Route path="/screening" exact element={<Screening />}></Route>
        <Route path="/assesment" exact element={<Assessment />}></Route>        
        <Route path="/spell" exact element={<Spelling />}></Route>        
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
