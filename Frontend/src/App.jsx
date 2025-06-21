import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Home from './components/Home'
import Navbar from './components/ui/shared/Navbar'
import { Route , Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/login' element={<SignIn/>} ></Route>
        <Route path='/signup' element={<SignUp/>} ></Route>
        
        {/* <Route path='/' element={<BrowseJobs/>}></Route>
        <Route path='/' element={<Jobs/>} ></Route> */}
      </Routes>

    </>
  )
}

export default App
