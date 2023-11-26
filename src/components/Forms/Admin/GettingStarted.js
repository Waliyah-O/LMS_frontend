import { useFormik } from 'formik';
import AuthLayout from '../../layouts/AuthLayout';
import CustomInput from '../../customInputs/CustomInputs';
import ErrorFields from '../../error/ErrorFields';
import { SignupSchemaEmail } from '../../../validations';
import Button from '../../button';
import { ButtonSize, ButtonState } from '../../button/enum';

const GettingStarted = () => {
  const formik = useFormik({
    initialValues: {
      organizationName: '',
      adminFirstName: '',
      adminLastName: '',
      email: '',
      password: '',
    },
    validationSchema: SignupSchemaEmail,
    onSubmit: handleSubmit,
  });

  function handleSubmit(values) {
    console.log(values);
  }

  return (
    <AuthLayout>
      <form className='flex flex-col gap-4' onSubmit={formik.handleSubmit}>
        <CustomInput
          inputError={formik.touched.organizationName && formik.errors.organizationName}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.organizationName}
          type="text"
          labelText="Organization Name"
          placeholder={'Enter organisation name'}
          name="organizationName"
        />

        <CustomInput
          inputError={formik.touched.adminFirstName && formik.errors.adminFirstName}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.adminFirstName}
          type="text"
          labelText="Admin First Name"
          placeholder={'Enter first name'}
          name="adminFirstName"
        />

        <CustomInput
          inputError={formik.touched.adminLastName && formik.errors.adminLastName}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.adminLastName}
          type="text"
          labelText="Admin Last Name"
          placeholder={'Enter last name'}
          name="adminLastName"
        />

        <CustomInput
          inputError={formik.touched.email && formik.errors.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
          type="email"
          labelText="Email Address"
          placeholder={'Enter email address'}
          name="email"
        />

        <CustomInput
          inputError={formik.touched.password && formik.errors.password}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
          type="password"
          labelText="Password"
          placeholder={'Enter Password'}
          name="password"
        />
        <ErrorFields password={formik.values.password} formik={formik} />

        <Button
          value={"Sign Up"} 
          size={ButtonSize.lg}
          variant={ButtonState.PRIMARY}
          type={"Button"}
          onClick={() => formik.handleSubmit()}
          className={"w-full mt-2"} 
          disabled={!formik.isValid || !formik.dirty}
        />
      </form>
    </AuthLayout>
  );
};

export default GettingStarted;
