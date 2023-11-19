import { Formik } from 'formik';
import AuthLayout from '../components/layouts/AuthLayout';
import Input from '../components/customInputs/CustomInputs';

const ForgotPassword = () => {
  return (
    <AuthLayout>
      <Formik>
        <form>
          <Input label={'Email address'} />
          <button className="btn w-full text-white">Retrieve password</button>
        </form>
      </Formik>
    </AuthLayout>
  );
};

export default ForgotPassword;
