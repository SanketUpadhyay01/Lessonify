import {Routes,Route} from 'react-router-dom'
import Landing from './pages/Landing'
import Screening from './pages/Screening'
import Navbar from './components/Navbar'
import Footer from './pages/Footer'

const App = ()=> {
  return (
    <div>
     <Navbar />
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
