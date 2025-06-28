import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Home from './pages/Home'
import { Route , Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/login' element={<SignIn/>} ></Route>
        <Route path='/signup' element={<SignUp/>} ></Route>
      </Routes>
    </>
  )
}

export default App
