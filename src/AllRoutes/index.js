import Dashboard from '../pages/index';
import SignIn from '../pages/signIn';
import SignUp from '../pages/signUp';
import CompleteProfile from '../components/Forms/Admin/CompleteProfile';

import { Routes, Route } from 'react-router-dom';
import ForgotPassword from '../pages/ForgotPassword';
import PasswordReset from '../pages/PasswordReset';
import LandingPage from '../pages/marketing-website/LandingPage';
import WhyPage from '../pages/marketing-website/WhyPage';
import Navigation from '../components/layouts/Navigation';
import OrganizationBenefits from '../pages/marketing-website/OrganizationBenefits';

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route element={<Navigation />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/why" element={<WhyPage />} />
          <Route path="/benefits" element={<OrganizationBenefits />} />
        </Route>

        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route path="/completeprofile" element={<CompleteProfile />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/passwordreset" element={<PasswordReset />} />
      </Routes>
    </>
  );
}

export default AllRoutes;
