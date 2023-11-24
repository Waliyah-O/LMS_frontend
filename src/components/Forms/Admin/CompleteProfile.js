import AuthLayout from '../../layouts/AuthLayout';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import CustomInput from '../../customInputs/CustomInputs';
import CustomSelect from '../../customInputs/CustomSelect';

const CompleteProfile = () => {
  const formik = useFormik({
    initialValues: {
      organizationAddress: '',
      adminPhoneNumber: '',
      countryOfResidence: '',
      stateOfResidence: '',
      gender: '',
      uploadOrganizationLogo: '',
    },
    validationSchema: Yup.object().shape({
      organizationAddress: Yup.string().required('This field is required'),
      adminPhoneNumber: Yup.string().required('This field is required'),
      countryOfResidence: Yup.string().required('This field is required'),
      stateOfResidence: Yup.string().required('This field is required'),
      gender: Yup.string().required('This field is required'),
      uploadOrganizationLogo: Yup.string().required('This field is required'),
    }),
    onSubmit: handleSubmit,
  });

  function handleSubmit(values) {
    console.log(values);
  }

  const countryOptions = [
    { position: 1, label: 'Nigeria' },
    { position: 2, label: 'Ghana' },
  ];
  const stateOptions = [
    { position: 1, label: 'Lagos' },
    { position: 2, label: 'Ogun' },
  ];

  return (
    <AuthLayout>
      <Formik onSubmit={formik.handleSubmit}>
        <form className="h-screen flex flex-col gap-2">
          <CustomInput
            name={'organizationAddress'}
            type={'text'}
            labelText={'Organization Address'}
            placeholder={'Enter organization address'}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.organizationAddress}
            inputError={formik.touched.organizationAddress && formik.errors.organizationAddress}
          />

          <CustomInput
            name={'adminPhoneNumber'}
            type={'number'}
            labelText={'Admin Phone Number'}
            placeholder={'Enter admin phone number'}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.adminPhoneNumber}
            inputError={formik.touched.adminPhoneNumber && formik.errors.adminPhoneNumber}
          />

          <CustomSelect
            optionText={'Select Country'}
            labelText={'Country of Residence'}
            options={countryOptions}
            value={formik.values.countryOfResidence}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name={'countryOfResidence'}
            errorText={formik.touched.countryOfResidence && formik.errors.countryOfResidence}
          />

          <CustomSelect
            optionText={'Select State'}
            labelText={'State of Residence'}
            options={stateOptions}
            value={formik.values.stateOfResidence}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name={'stateOfResidence'}
            errorText={formik.touched.stateOfResidence && formik.errors.stateOfResidence}
          />

          <CustomInput
            name={'uploadOrganizationLogo'}
            labelText={'Upload Organization Logo'}
            className={'file-input file-input-bordered w-full pl-0'}
            type={'file'}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.uploadOrganizationLogo}
            inputError={formik.touched.uploadOrganizationLogo && formik.errors.uploadOrganizationLogo}
          />

          <button className="btn w-full text-white my-3" type="submit">
            Create Account
          </button>
        </form>
      </Formik>
    </AuthLayout>
  );
};

export default CompleteProfile;
