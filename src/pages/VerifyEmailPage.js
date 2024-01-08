import VerifyOTP from '../components/Forms/Verify';
import { ErrorBoundary } from 'react-error-boundary';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowNarrowLeft } from '../assets/svg/arrow_narrow_left.svg';
import { ErrorUI } from '../components/error/ErrorUi';
import authImg from '../assets/images/authImg.png';
// import Button from '../components/button/index';
// import { ButtonSize, ButtonState } from '../components/button/enum';
import { useSelector } from 'react-redux';
import { showToast } from '../utils';
import { useSendOTPMutation, useVerifyOTPMutation } from '../services/OTPServices';
import { useState, useEffect } from 'react';

const VerifyEmailPage = () => {
  const { otp, emailAddress } = useSelector((state) => state.auth);
  const [resendTime, setResendTime] = useState(60);
  const [resendDisabled, setResendDisabled] = useState(false);
  //   const dispatch = useDispatch();
  const navigate = useNavigate();

  const [sendOTP, { data: OTPData, error: sendOTPError, isLoading: sendingOTP }] = useSendOTPMutation();

  const [verifyOTP, { data: verificationData, error: verificationError, isLoading: verifyingOTP }] = useVerifyOTPMutation();

  function handleResendOTP() {
    setResendTime(60);
    setResendDisabled(true); // Disable the resend button
    sendOTP({ destinationEmail: emailAddress });
  }

  useEffect(() => {
    if (sendOTPError) return;
    const interval = setInterval(() => {
      if (resendTime > 0) {
        setResendTime((prevTime) => prevTime - 1);
      } else {
        setResendDisabled(false); // Enable the resend button when the countdown reaches 0
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [resendTime]);

  useEffect(() => {
    if (otp.length === 4)
      verifyOTP({
        destinationEmail: emailAddress,
        pin: otp,
      });
  }, [otp]);

  useEffect(() => {
    if (verificationError) showToast(verificationError.data.detail, 'error', verificationError.data.title);
    if (verificationData && verificationData?.status === 'OK') {
      // if (verificationData?.data.verified === true) {
      showToast('You will be redirected shortly', 'success', 'Verification successful!');
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } else {
      showToast('Provide correct OTP', 'Error', 'Verification Failed!');
    }
    // }
    if (sendingOTP) {
      showToast('Sending OTP', 'loading', 'Please wait.');
    }
    // console.log(sendOTPError)
    // console.log(auth.phoneNumber)
  }, [verificationError, verificationData, OTPData]);

  return (
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
              {verificationError && (
                <p className={`bg-error/50 text-error-content py-2 px-4 rounded-md`}>
                  An error occured: ({verificationError?.data?.title}). Please try again with a different OTP
                </p>
              )}
              {sendOTPError && (
                <p className={`bg-error/50 text-error-content py-2 px-4 rounded-md`}>
                  Error sending OTP: ({sendOTPError?.error}). Please try again.
                </p>
              )}
              <div className="flex flex-col gap-4">
                <VerifyOTP />
                <p className="[font-size:14px] [color:#111928] [font-weight:400]">Check your email for the verification code</p>
                <p className="mt-4">
                  Didnt get the code?{' '}
                  <button
                    className={` mt-2 font-semibold py-2 ${resendTime === 0 ? 'link link-hover italic' : 'opacity-50'}`}
                    onClick={handleResendOTP}
                    disabled={
                      (resendDisabled || sendingOTP || verifyingOTP) &&
                      (!sendOTPError || verificationError?.data.verified === false)
                    }
                  >
                    Resend {resendTime === 0 || sendOTPError ? 'now' : 'in ' + resendTime}
                  </button>
                </p>
              </div>
              <button
                className={`btn bg-olive-500 text-white w-full mt-4`}
                onClick={() =>
                  verifyOTP({
                    destinationEmail: emailAddress,
                    pin: otp,
                  })
                }
                disabled={verifyingOTP || sendingOTP || otp === ''}
              >
                {verifyingOTP ? <span className="loading loading-bars" /> : 'Verify'}
              </button>
            </div>
          </div>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
