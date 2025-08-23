import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Home from './pages/Home/Home'
import { Navigate, Route , Routes } from 'react-router-dom'
import Jobs from './pages/Jobs/Jobs'
import Browse from './pages/Browse/Browse'
import Profile from './pages/Profile/Profile'
import JobsDetails from './pages/Jobs/JobsDetails'
import Companies from './components/admin/companies/Companies'
import AdminJobs from './components/admin/jobs/AdminJobs'
import CreateCompany from './components/admin/companies/CreateCompany'
import AddCompanyDetails from './components/admin/companies/AddCompanyDetails'
import AddJobDetails from './components/admin/jobs/AddJobDetails'
import SingleJobApplicants from './components/admin/jobs/SingleJobApplicants'
import ProtectedRoutes from './components/admin/ProtectedRoutes'
import JobPostUpdate from './components/admin/jobs/JobPostUpdate'
import { useSelector } from 'react-redux'

function App() {

  const {user} = useSelector(store=> store?.auth)

  return (
    <>
      <Routes>
        <Route path='/' element={ user ? <Home /> : <Navigate to="/login" /> } />
        <Route path='/login' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/browse' element={<Browse />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/description/:id' element={<JobsDetails />} />

        {/* Protected Routes for admin */}

        {/* 1. Company Routes */}
        <Route path='/admin/companies' element={ <ProtectedRoutes><Companies /></ProtectedRoutes>} />
        <Route path='/admin/jobs' element={<ProtectedRoutes><AdminJobs /></ProtectedRoutes>} />
        <Route path='/admin/companies/create-company' element={<ProtectedRoutes><CreateCompany /></ProtectedRoutes>} />
        <Route path='/admin/companies/:id' element={<ProtectedRoutes><AddCompanyDetails /></ProtectedRoutes>} />
        
        {/* 2. Admin Job Routes */}
        <Route path='/admin/jobs/post-job' element={<ProtectedRoutes> <AddJobDetails /></ProtectedRoutes> } />
        <Route path='/admin/jobs/applicants/:id' element={<ProtectedRoutes><SingleJobApplicants /></ProtectedRoutes>} />
        <Route path='/admin/jobs/:id' element={<ProtectedRoutes><JobPostUpdate /></ProtectedRoutes>} />

      </Routes>
    </>
  )
}

export default App
