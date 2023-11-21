import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import AuthLayout from '../../layouts/AuthLayout';
import CustomInput from '../../customInputs/CustomInputs';
import ErrorFields from '../../error/ErrorFields';

const GettingStarted = () => {
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
      email: Yup.string().required('This field is required').email('Invalid email address'),
      password: Yup.string()
        .required('This field is required')
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
          <CustomInput
            inputError={formik.touched.organizationName && formik.errors.organizationName}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.organizationName}
            type="text"
            labelText="Organization Name"
            name="organizationName"
          />

          <CustomInput
            inputError={formik.touched.adminFirstName && formik.errors.adminFirstName}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.adminFirstName}
            type="text"
            labelText="Admin First Name"
            name="adminFirstName"
          />

          <CustomInput
            inputError={formik.touched.adminLastName && formik.errors.adminLastName}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.adminLastName}
            type="text"
            labelText="Admin Last Name"
            name="adminLastName"
          />

          <CustomInput
            inputError={formik.touched.email && formik.errors.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
            type="email"
            labelText="Email Address"
            name="email"
          />

          <CustomInput
            inputError={formik.touched.password && formik.errors.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
            type="password"
            labelText="Password"
            name="password"
          />

          <ErrorFields password={formik.values.password} formik={formik} />

          <button className="btn w-full text-white mt-2" type="submit">
            Next
          </button>
        </form>
      </Formik>
    </AuthLayout>
  );
};

export default GettingStarted;
