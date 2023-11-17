import { ErrorBoundary } from 'react-error-boundary';
import { ErrorUI } from '../error/ErrorUi';
import AuthImage from '../../assets/images/AuthPageImage.jpg';

const AuthLayout = ({ children }) => {
  return (
    <div className=" w-screen flex items-center">
      <ErrorBoundary FallbackComponent={ErrorUI}>
        <div className="sm:w-1/2 hidden sm:block">
          <img className="h-screen" src={AuthImage} alt="smiling-girl-image" />
        </div>

        <div className=" sm:w-2/5 w-full flex-col items-center sm:p-2 p-4">
          <h1 className="my-5 text-xl-heading">Lets Get Started</h1>
          <p className="my-5">To sign up admin must fill in basic information below </p>
          {children}
        </div>
      </ErrorBoundary>
    </div>
  );
};

export default AuthLayout;
