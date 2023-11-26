import { useFormik } from 'formik';
import AuthLayout from '../components/layouts/AuthLayout';
import CustomInput from '../components/customInputs/CustomInputs';
import Button from '../components/button';
import { ButtonSize, ButtonState } from '../components/button/enum';
import { ForgotPasswordSchema } from '../validations';

const ForgotPassword = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: ForgotPasswordSchema,
  });
  return (
    <AuthLayout>
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
        <Button
          value={"Reset Password"} 
          size={ButtonSize.lg}
          variant={ButtonState.PRIMARY}
          type={"Button"}
          onClick={() => formik.handleSubmit()}
          className={"w-full mt-8"} 
          disabled={!formik.isValid || !formik.dirty}
        />
      </form>
    </AuthLayout>
  );
};

export default ForgotPassword;
