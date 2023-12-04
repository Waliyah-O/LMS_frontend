import { Link } from 'react-router-dom';
import UseCase from '../components/pagination/useCase';
import Alerts from '../components/alerts/Alerts';
import { types } from '../components/alerts';
// import CustomCarousel from '../components/carousel/CustomCarousel';

const Index = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to={'./signup'}>Signup</Link> <br />
      <Link to={'./completeprofile'}>complete profile</Link> <br />
      <Link to={'./signin'}>Signin</Link> <br />
      <Link to={'./forgotpassword'}>forgot password</Link> <br />
      <Link to={'./passwordreset'}>Reset Password</Link>
      <UseCase />
      <Alerts alertStyle="alert-info" alertType={types.infoAlert()} alertText="This is an alert" />
    </div>
  );
};

export default Index;
