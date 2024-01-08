import Dashboard from '../pages/index';
import SignIn from '../pages/signIn';
// import SignUp from '../pages/signUp';
import CompleteProfile from '../components/Forms/Admin/CompleteProfile';

import { Routes, Route } from 'react-router-dom';
import ForgotPassword from '../pages/ForgotPassword';
import PasswordReset from '../pages/PasswordReset';
import LandingPage from '../pages/marketing-website/LandingPage/LandingPage';
import WhyPage from '../pages/marketing-website/WhyPage/WhyPage';
import Navigation from '../components/layouts/Navigation';
import OrganizationBenefits from '../pages/marketing-website/OrganizationBenefits/OrganizationBenefits';
import AuthLayout from '../components/layouts/AuthLayout';
import GettingStarted from '../components/Forms/Admin/GettingStarted';
import TutorSignUp from '../pages/TutorSignUp';
import StudentSignUp from '../pages/StudentSignUp';
import FAQpage from '../pages/marketing-website/FAQs/FAQpage';
import ContactPage from '../pages/marketing-website/ContactUs/ContactPage.js';
import VerifyEmailPage from '../pages/VerifyEmailPage.js';
import DemoPage from '../pages/marketing-website/DemoPage/DemoPage.js';

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<LandingPage />} />
        <Route path="why" element={<WhyPage />} />
        <Route path="benefits" element={<OrganizationBenefits />} />
        <Route path="faq" element={<FAQpage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="demo" element={<DemoPage />} />
      </Route>

      {/* <Protected> */}
      <Route path="signup" element={<AuthLayout />}>
        <Route path="organization" element={<GettingStarted />} />
        <Route path="tutor" element={<TutorSignUp />} />
        <Route path="student" element={<StudentSignUp />} />
      </Route>

      <Route path="verify" element={<VerifyEmailPage />} />

      <Route path="signin" element={<AuthLayout />}>
        <Route path="organization" element={<SignIn />} />
        <Route path="tutor" element={<SignIn />} />
        <Route path="student" element={<SignIn />} />
      </Route>

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/completeprofile" element={<CompleteProfile />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/passwordreset" element={<PasswordReset />} />
      {/* </Protected> */}
    </Routes>
  );
}

export default AllRoutes;
