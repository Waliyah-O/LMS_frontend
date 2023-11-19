import AuthLayout from '../../layouts/AuthLayout';
import Input from '../../customInputs/CustomInputs';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
// import Select from '../../customInputs/CustomSelect';
import FormikController from '../../../controller/FormikController';

const CompleteProfile = () => {
  // const firstName = useSelector((state) => state.firstName);
  // const lastName = useSelector((state) => state.lastName);

  const countries = [
    { key: 'Select country', value: '' },
    { key: 'choice a', value: 'choicea' },
    { key: 'choice b', value: 'choiceb' },
  ];
  // const states = [
  //   { key: 'Select state', value: '' },
  //   { key: 'choice a', value: 'choicea' },
  //   { key: 'choice b', value: 'choiceb' },
  // ];
  // const gender = [
  //   { key: 'Select gender', value: '' },
  //   { key: 'choice a', value: 'choicea' },
  //   { key: 'choice b', value: 'choiceb' },
  // ];

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
      adminPhoneNumber: Yup.string().required('This field is required').min(11, 'Must be 11 characters or more'),
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

  return (
    <AuthLayout>
      <Formik initialValues={{}} onSubmit={formik.handleSubmit}>
        <form>
          <Input
            name={'organizationAddress'}
            type={'text'}
            label={'Organization Address'}
            placeholder={'Enter organization address'}
            required={true}
            formik={formik}
            onChange={formik.handleChange}
            value={formik.values.organizationAddress}
          />
          <Input
            name={'adminPhoneNumber'}
            type={'number'}
            label={'Admin Phone Number'}
            placeholder={'Enter admin phone number'}
            required={true}
            formik={formik}
            onChange={formik.handleChange}
            value={formik.values.adminPhoneNumber}
          />
          <FormikController control="select" label="Select country" name="countryOfResidence" options={countries} />
          <FormikController control="select" label="Select state" name="stateOfResidence" options={countries} />
          <FormikController control="select" label="Select gender" name="gender" options={countries} />

          <label className="label-text">Upload Organization Logo</label>
          <input
            name={'uploadOrganizationLogo'}
            placeholder={'No file chosen'}
            required={true}
            onChange={formik.handleChange}
            value={formik.values.uploadOrganizationLogo}
            type="file"
            className="file-input file-input-bordered w-full mb-3"
          />
          <button className="btn w-full text-white" type="submit">
            Create Account
          </button>
        </form>
      </Formik>
    </AuthLayout>
  );
};

export default CompleteProfile;
