import { useState } from 'react';
import CustomInput from '../components/customInputs/CustomInputs';
import AuthLayout from '../components/layouts/AuthLayout';
import { ReactComponent as Eyelash } from '../assets/svg/eyeslash.svg';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('This field is required'),
      password: Yup.string().required('This field is required'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <AuthLayout>
      <Formik onSubmit={formik.handleSubmit}>
        <form>
          <CustomInput type={'email'} name={'email'} label={'Email Address'} placeholder={'address@mail.com'} required={true} />
          <CustomInput
            name={'password'}
            label={'Password'}
            placeholder={'*********'}
            required={true}
            type={showPassword ? 'text' : 'password'}
            icon={<Eyelash onClick={togglePassword} />}
          />
          <button className="btn w-full text-white mt-2" type="submit">
            Sign In
          </button>
        </form>
      </Formik>
    </AuthLayout>
  );
};

export default SignIn;
