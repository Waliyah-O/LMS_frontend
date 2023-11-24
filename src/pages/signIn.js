import { useState } from 'react';
import CustomInput from '../components/customInputs/CustomInputs';
import AuthLayout from '../components/layouts/AuthLayout';
import { ReactComponent as Eyelash } from '../assets/svg/eyeslash.svg';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      toast.error(
        <>
          Incorrect Email or Password <span className="font-normal">Confirm your details.</span>
          <br />
        </>,
        {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          style: {
            backgroundColor: 'rgba(253, 232, 232, 1)',
            color: 'rgba(200, 30, 30, 1)',
            fontWeight: 'bold',
          },
        }
      );

      toast.success(
        <>
          Login Successful
          <br />
        </>,
        {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          style: {
            backgroundColor: 'rgba(4, 108, 78, 0.1)',
            color: '#148519',
            fontWeight: 'bold',
          },
        }
      );
      console.log(values);
    },
  });

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <AuthLayout>
      <Formik>
        <form onSubmit={formik.handleSubmit}>
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
      <ToastContainer />
    </AuthLayout>
  );
};

export default SignIn;
