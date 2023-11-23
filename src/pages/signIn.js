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
          <CustomInput
            name={'email'}
            labelText={'Email Address'}
            placeholder={'Enter email address'}
            required={true}
            type={'email'}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
            inputError={formik.touched.email && formik.errors.email}
          />
          <CustomInput
            name={'password'}
            labelText={'Password'}
            placeholder={'Enter password'}
            required={true}
            type={showPassword ? 'text' : 'password'}
            icon={<Eyelash onClick={togglePassword} />}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
            inputError={formik.touched.password && formik.errors.password}
          />
          <button className="btn w-full text-white my-5" type="submit">
            Sign In
          </button>
        </form>
      </Formik>
    </AuthLayout>
  );
};

export default SignIn;
