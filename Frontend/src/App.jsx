import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Home from './pages/Home/Home'
import { Route , Routes } from 'react-router-dom'
import Jobs from './pages/Jobs/Jobs'
import Browse from './pages/Browse/Browse'
import Profile from './pages/Profile/Profile'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/browse' element={<Browse />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
