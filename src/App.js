import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Screening from './pages/Screening'
import Aboutus from './pages/Aboutus'
import Doctorsprofile from './pages/Doctorsprofile'
import Header from './components/Header'
import Footer from './components/Footer'
import Assessment from './pages/assesment/Assessment'
import Spelling from './pages/assesment/pages/spelling/Spelling'
import Math from './pages/assesment/pages/math-test/Math'
import Signup from './pages/Signup'
import Login from './pages/Login'
import ImageQuiz from './pages/assesment/pages/imageQuiz/index.jsx'
import SignUpDoc from 'pages/SignUpDoc'
import SignUpUser from 'pages/SignUpUser'


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact element={<Landing />}></Route>
        <Route path="/home" exact element={<Landing />}></Route>
        <Route path="/screening" exact element={<Screening />}></Route>
        <Route path="/aboutus" exact element={<Aboutus />}></Route>
        <Route path="/doctorsprofile" exact element={<Doctorsprofile />}></Route>
        <Route path="/signup" exact element={<Signup />}></Route>
        <Route path="/signup-doc" exact element={<SignUpDoc />}></Route>
        <Route path="/signup-user" exact element={<SignUpUser />}></Route>
        <Route path="/login_pg" exact element={<Login />}></Route>
        <Route path="/assesment" exact element={<Assessment />}></Route>        
        <Route path="/spell" exact element={<Spelling />}></Route> 
        <Route path="/math" exact element={<Math />}></Route>     
        <Route path="/imagequiz" exact element={<ImageQuiz />}></Route>     

      </Routes>
      <Footer />
    </div>

  );
}

export default App;
