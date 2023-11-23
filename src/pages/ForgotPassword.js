import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import AuthLayout from '../components/layouts/AuthLayout';
import CustomInput from '../components/customInputs/CustomInputs';

const ForgotPassword = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required('Thus field is required'),
    }),
  });
  return (
    <AuthLayout>
      <Formik>
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
          <button className="btn w-full my-5 text-white">Retrieve password</button>
        </form>
      </Formik>
    </AuthLayout>
  );
};

export default ForgotPassword;
