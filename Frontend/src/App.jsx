import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Home from './pages/Home/Home'
import { Route , Routes } from 'react-router-dom'
import Jobs from './pages/Jobs/Jobs'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/login' element={<SignIn/>} ></Route>
        <Route path='/signup' element={<SignUp/>} ></Route>
        <Route path='/jobs' element={<Jobs />} ></Route>
      </Routes>
    </>
  )
}

export default App
