import Dashboard from '../pages/index';
import SignIn from '../pages/signIn';
import SignUp from '../pages/signUp';
import CompleteProfile from '../components/Forms/Admin/CompleteProfile';

import { Routes, Route } from 'react-router-dom';
import ForgotPassword from '../pages/ForgotPassword';
import PasswordReset from '../pages/PasswordReset';
import LandingPage from '../pages/LandingPage';
import Hero from '../components/layouts/Hero';

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route path="/completeprofile" element={<CompleteProfile />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/passwordreset" element={<PasswordReset />} />
        <Route path="/hero" element={<Hero />} />
      </Routes>
    </>
  );
}

export default AllRoutes;
