import Dashboard from '../pages/index'
import SignIn from '../pages/signIn'
import SignUp from '../pages/signUp'
import CompleteProfile from '../components/Forms/Admin/CompleteProfile';

import { Routes, Route } from 'react-router-dom';

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route exact path="" element={<Dashboard />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/completeprofile" element={<CompleteProfile />} />
      </Routes>
    </>
  )
}

export default AllRoutes;
