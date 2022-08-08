import {useEffect} from 'react'
import {Routes,Route} from 'react-router-dom'
import Landing from './pages/Landing'
import Screening from './pages/Screening'
import Header from './components/Header'
import Footer from './components/Footer'
import Signup from './pages/Signup'
import Login from './pages/Login'


const App = ()=> {
  return (
    <div>
     <Header />
      <Routes>
        <Route path="/" exact element={<Landing />}></Route>
        <Route path="/home" exact element={<Landing/>}></Route>
        <Route path="/screening" exact element={<Screening />}></Route>
        <Route path="/signup" exact element={<Signup />}></Route>
        <Route path="/login_pg" exact element={<Login />}></Route>
      </Routes>
      <Footer/>
    </div>

  );
}

export default App;
