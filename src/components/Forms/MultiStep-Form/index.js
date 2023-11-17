import { Route, Routes } from 'react-router-dom';
import StepCounter from '../components/Forms/MultiStep-Form/StepCounter';
import Step1 from '../components/Forms/MultiStep-Form/Step1';
import Step2 from '../components/Forms/MultiStep-Form/Step2';
import Step3 from '../components/Forms/MultiStep-Form/Step3';
import Step4 from '../components/Forms/MultiStep-Form/Step4';
import Submit from '../components/Forms/MultiStep-Form/Submit';
import Result from '../components/Forms/MultiStep-Form/Result';
import AuthLayout from '../components/layouts/AuthLayout';

const SignUp = () => {
  return (
    <AuthLayout>
      <div>
        <div className=" w-full">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <StepCounter /> <Step1 />
                </>
              }
            />
            <Route
              path="step2"
              element={
                <>
                  <StepCounter /> <Step2 />
                </>
              }
            />
            <Route
              path="/step2/step3"
              element={
                <>
                  <StepCounter /> <Step3 />
                </>
              }
            />
            <Route
              path="/step2/step3/step4"
              element={
                <>
                  <StepCounter /> <Step4 />
                </>
              }
            />
            <Route path="/step2/step3/step4/result" element={<Result />} />
            <Route path="/step2/step3/step4/result/submit" element={<Submit />} />
          </Routes>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
