import AuthLayout from '../../layouts/AuthLayout';
import Input from '../../customInputs/CustomInputs';
import { Link } from 'react-router-dom';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';

const GettingStarted = () => {
  // const firstName = useSelector((state) => state.firstName);
  // const lastName = useSelector((state) => state.lastName);

  const formik = useFormik({
    initialValues: {
      organizationName: '',
      adminFirstName: '',
      adminLastName: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      organizationName: Yup.string().required('This field is required'),
      adminFirstName: Yup.string().required('This field is required'),
      adminLastName: Yup.string().required('This field is required'),
      email: Yup.string().required('This field is required'),
      password: Yup.string()
        .min(10, 'Password must be 10 characters long')
        .matches(/[A-Z]/, 'Password requires an uppercase letter')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[^\w]/, 'Password requires a special character'),
    }),
    onSubmit: handleSubmit,
  });

  function handleSubmit(values) {
    console.log(values);
  }

  return (
    <AuthLayout>
      <Formik onSubmit={formik.handleSubmit}>
        <form>
          <Input
            name={'organizationName'}
            type={'text'}
            label={'Organization Name'}
            placeholder={'Enter organization name'}
            required={true}
            formik={formik}
            onChange={formik.handleChange}
            value={formik.values.organizationName}
          />
          <Input
            name={'adminFirstName'}
            type={'text'}
            label={'Admin First Name'}
            placeholder={'Enter admin first name'}
            required={true}
            formik={formik}
            onChange={formik.handleChange}
            value={formik.values.adminFirstName}
          />
          <Input
            name={'adminLastName'}
            type={'text'}
            label={'Admin Last Name'}
            placeholder={'Enter last name'}
            required={true}
            formik={formik}
            onChange={formik.handleChange}
            value={formik.values.adminLastName}
          />
          <Input
            name={'email'}
            type={'email'}
            label={'Email Address'}
            placeholder={'Enter email address'}
            required={true}
            formik={formik}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <Input
            name={'password'}
            type={'password'}
            label={'Password'}
            placeholder={'Enter password'}
            required={true}
            formik={formik}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <Link to='/signup.completeprofile' relative='path'>
            <button className="btn w-full text-white mt-2" type="submit">
              Next
            </button>
          </Link>
        </form>
      </Formik>
    </AuthLayout>
  );
};

export default GettingStarted;
