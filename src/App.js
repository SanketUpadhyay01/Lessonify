import {useEffect} from 'react'
import {Routes,Route} from 'react-router-dom'
import Landing from './pages/Landing'
import Screening from './pages/Screening'
<<<<<<< HEAD
import Header from './components/Header'
import Footer from './components/Footer'
=======
import Navbar from './components/Navbar'
import Footer from './pages/Footer'
>>>>>>> c3cdc118d2643dd6a7a5faf3760480d1efd093b2

const App = ()=> {
  return (
    <div>
     <Header />
      <Routes>
        <Route path="/" exact element={<Landing />}></Route>
        <Route path="/home" exact element={<Landing/>}></Route>
        <Route path="/screening" exact element={<Screening />}></Route>
      </Routes>
      <Footer/>
    </div>

  );
}

export default App;
