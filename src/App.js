import {useEffect} from 'react'
import {Routes,Route} from 'react-router-dom'
import Landing from './pages/Landing'
import Screening from './pages/Screening'
import Header from './components/Header'
import Footer from './components/Footer'

const App = ()=> {
  return (
    <div>
     <Header />
      <Routes>
        <Route path="/" exact element={<Landing />}></Route>
        <Route path="/screening" exact element={<Screening />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
