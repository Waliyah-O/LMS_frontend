import { ErrorBoundary } from 'react-error-boundary';
import { Link, useLocation } from 'react-router-dom';
import { ErrorUI } from '../error/ErrorUi';
import AuthImage from '../../assets/images/AuthPageImage.jpg';

const AuthLayout = ({ children }) => {
  const location = useLocation();
  const linkTo = location.pathname === '/signup' ? '/signin' : '/signup';

  const header = () => {
    if (location.pathname === '/signup') {
      return "let's Get Started";
    } else if (location.pathname === '/signin') {
      return 'Welcome Back!';
    } else if (location.pathname === '/forgotpassword') {
      return 'Forget Password?';
    }
  };
  const subHeader = () => {
    if (location.pathname === '/signup') {
      return 'To sign up admin must fill in basic information below';
    } else if (location.pathname === '/signin') {
      return 'Sign in to your account';
    } else if (location.pathname === '/forgotpassword') {
      return 'Please provide your email address to initiate the password reset process.';
    }
  };

  return (
    <div className=" w-screen flex items-center">
      <ErrorBoundary FallbackComponent={ErrorUI}>
        <div className="sm:w-1/2 hidden sm:block">
          <img className="h-screen" src={AuthImage} alt="smiling-girl-image" />
        </div>

        <div className=" sm:w-2/5 w-full flex-col items-center sm:p-2 p-4">
        <span> &larr; Go Home</span>
          <h1 className="my-5 text-xl-heading"> {header()}</h1>
          <p className="my-5"> {subHeader()}</p>
          {children}
          <p>
            Have an account?{' '}
            <Link to={linkTo} className="text-blue-500">
              {location.pathname === '/signup' ? 'Sign In' : 'Sign Up'}
            </Link>
          </p>
        </div>
      </ErrorBoundary>
    </div>
  );
};

export default AuthLayout;
