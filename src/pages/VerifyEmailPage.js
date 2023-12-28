import VerifyOTP from '../components/Forms/Verify';
import { ErrorBoundary } from 'react-error-boundary';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowNarrowLeft } from '../assets/svg/arrow_narrow_left.svg';
import { ErrorUI } from '../components/error/ErrorUi';
import authImg from '../assets/images/authImg.png';

const VerifyEmailPage = () => {
  return (
    <div>
      <div>
        <div className="w-full flex justify-evenly gap-24 bg-white md:p-5 lg:p-16">
          <ErrorBoundary FallbackComponent={ErrorUI}>
            <div className="relative [background-color:rgba(83,85,90,0.35)] [width:524px] [height:460px] rounded-3xl hidden lg:block">
              <h3 className="font-extrabold text-white font-sora [font-size:32px] absolute top-20 right-6 ">Organization</h3>
              <img className="[width:369px] [height:507px] absolute bottom-0 left-0" src={authImg} />
            </div>

            <div className="[width:524px] lg:w-3/5  flex-col items-center sm:p-2 p-4">
              <div className="flex flex-col items-start gap-10">
                <Link className="flex gap-2 items-center" to="/">
                  <ArrowNarrowLeft />
                  <span className="text-black font-medium text-small">Go Home</span>
                </Link>
                <div className="w-full">
                  <div className="w-full mb-5 items-center justify-start md:items-start font-inter ">
                    <h2 className="font-semibold [font-size:32px]  [color:#53555A]">Verify your email address.</h2>
                    <p className="[font-size:14px] [color:#111928] [font-weight:400]">
                      We emailed you a six-digit code to{' '}
                      <span className="[font-weight:700] [color:#111928]">segun.obansanjo@africaprudential.com</span> <br /> Enter
                      the code below to confirm your email address.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-4">
                  <VerifyOTP />
                  <p className="[font-size:14px] [color:#111928] [font-weight:400]">Check your email for the verification code</p>
                  <p className="[font-size:14px] [color:#111928] [font-weight:400]">
                    Didn’t get a code? <span className="[color:#D43325]">Resend OTP Code</span>
                  </p>
                </div>
              </div>
            </div>
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
