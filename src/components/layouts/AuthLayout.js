import { ErrorBoundary } from 'react-error-boundary';
import { Link, useLocation } from 'react-router-dom';
import { ErrorUI } from '../error/ErrorUi';
import AuthImage from '../../assets/images/AuthPageImage.jpg';
import { ReactComponent as ArrowNarrowLeft } from '../../assets/svg/arrow_narrow_left.svg';

const AuthLayout = ({ children }) => {
  const location = useLocation();
  const linkTo = location.pathname === '/signup' ? '/signin' : '/signup';

  const header = () => {
    if (location.pathname === '/signup') {
      return "Let's Get Started";
    } else if (location.pathname === `/signup.completeprofile`) {
      return 'Complete Profile';
    } else if (location.pathname === '/signin') {
      return 'Welcome Back!';
    } else if (location.pathname === '/forgotpassword') {
      return 'Forgot Password?';
    }
  };
  const subHeader = () => {
    if (location.pathname === '/signup') {
      return 'To sign up admin must fill in basic information below';
    } else if (location.pathname === `/signup.completeprofile`) {
      return 'Complete profile information to go on to assessment';
    } else if (location.pathname === '/signin') {
      return 'Please enter your information to access your Account.';
    } else if (location.pathname === '/forgotpassword') {
      return 'Please provide your email address to initiate the password reset process.';
    }
  };

  return (
    <div className=" w-screen flex items-center gap-36 bg-white">
      <ErrorBoundary FallbackComponent={ErrorUI}>
        <div className=" sm:w-2/5  hidden sm:block">
          <img className="w-full" src={AuthImage} alt="smiling-girl-image" />
        </div>

        <div className=" sm:w-2/5 w-full flex-col items-center sm:p-2 p-4 ">
          <Link to={location.pathname.includes('forgotpassword') ? '/signin' : '/'}>
            <span className='text-black font-medium text-small flex gap-2 items-center'> <ArrowNarrowLeft /> {location.pathname.includes('forgotpassword') ? 'Go back to login' : 'Go Home'}</span>
          </Link>
          <h1 className="mb-3 mt-14 text-xl-heading text-green-500 font-semibold"> {header()}</h1>
          <p className="mb-5 text-gray-900"> {subHeader()}</p>
          {children}
          {(location.pathname === '/signup' || location.pathname === '/signin') && (
            <p className='mt-5 text-black text-sm font-medium'>
              Have an account?{' '}
              <Link to={linkTo} className="text-green-500">
                {location.pathname === '/signup' ? 'Sign In' : 'Sign Up'}
              </Link>
            </p>
          )}
        </div>
      </ErrorBoundary>
    </div>
  );
};

export default AuthLayout;
