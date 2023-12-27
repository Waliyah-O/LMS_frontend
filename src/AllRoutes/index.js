import Dashboard from '../pages/index';
import SignIn from '../pages/signIn';
// import SignUp from '../pages/signUp';
import CompleteProfile from '../components/Forms/Admin/CompleteProfile';

import { Routes, Route } from 'react-router-dom';
import ForgotPassword from '../pages/ForgotPassword';
import PasswordReset from '../pages/PasswordReset';
import LandingPage from '../pages/marketing-website/LandingPage';
import WhyPage from '../pages/marketing-website/WhyPage';
import Navigation from '../components/layouts/Navigation';
import OrganizationBenefits from '../pages/marketing-website/OrganizationBenefits';
import AuthLayout from '../components/layouts/AuthLayout';
import GettingStarted from '../components/Forms/Admin/GettingStarted';
import TutorSignUp from '../pages/TutorSignUp';
import StudentSignUp from '../pages/StudentSignUp';

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route element={<Navigation />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/why" element={<WhyPage />} />
          <Route path="/benefits" element={<OrganizationBenefits />} />
        </Route>

        <Route path="signup" element={<AuthLayout />}>
          <Route index element={<GettingStarted />} />
          <Route path="tutor" element={<TutorSignUp />} />
          <Route path="student" element={<StudentSignUp />} />
        </Route>
        <Route path="signin" element={<AuthLayout />}>
          <Route index element={<SignIn />} />
          <Route path="tutor" element={<SignIn />} />
          <Route path="student" element={<SignIn />} />
        </Route>

        <Route exact path="/dashboard" element={<Dashboard />} />
        {/* <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} /> */}
        <Route path="/completeprofile" element={<CompleteProfile />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/passwordreset" element={<PasswordReset />} />
      </Routes>
    </>
  );
}

export default AllRoutes;
