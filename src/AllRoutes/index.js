import Dashboard from '../pages/index';
import SignIn from '../pages/signIn';
import SignUp from '../pages/signUp';
import CompleteProfile from '../components/Forms/Admin/CompleteProfile';

import { Routes, Route } from 'react-router-dom';
import ForgotPassword from '../pages/ForgotPassword';

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route path="/signup.completeprofile" element={<CompleteProfile />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default AllRoutes;
