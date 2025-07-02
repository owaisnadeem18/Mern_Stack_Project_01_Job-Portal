import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Home from './pages/Home/Home'
import { Route , Routes } from 'react-router-dom'
import Jobs from './pages/Jobs/Jobs'
import Browse from './pages/Browse/Browse'

function App() {

  return (
    <>
      <Routes>
           <Route path='/' element={<Home />} />
      <Route path='/login' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/jobs' element={<Jobs />} />
      <Route path='/browse' element={<Browse />} />
      </Routes>
    </>
  )
}

export default App
