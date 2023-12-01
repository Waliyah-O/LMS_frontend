import GettingStarted from '../components/Forms/Admin/GettingStarted';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import SideBar from '../components/sidebar/SideBar';
import Alerts from '../components/alerts/Alerts';

const SignUp = ({ buttonText }) => {
  return (
    <div>
      {/* <Drawer /> */}
      <Navbar />
      <GettingStarted />
      <Footer />
      {/* <Alerts alertStyle={'alert-success'} alertType={successAlert()} /> */}
    </div>
  );
};

export default SignUp;
