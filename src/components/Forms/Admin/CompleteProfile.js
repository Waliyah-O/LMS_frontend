import AuthLayout from '../../layouts/AuthLayout';
import Input from '../../customInputs/CustomInputs';
import { Link } from 'react-router-dom';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import Select from '../../customInputs/CustomSelect';

const CompleteProfile = () => {
  // const firstName = useSelector((state) => state.firstName);
  // const lastName = useSelector((state) => state.lastName);

  const formik = useFormik({
    initialValues: {
      organizationAddress: '',
      adminPhoneNumber: '',
      countryOfResidence: '',
      stateOfResidence: '',
      gender: '',
      uploadOrganizationLogo: '',
    },
    validationSchema: Yup.object({
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

  return (
    <AuthLayout>
      <Formik onSubmit={formik.handleSubmit}>
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
            type={'text'}
            label={'Admin Phone Number'}
            placeholder={'Enter admin phone number'}
            required={true}
            formik={formik}
            onChange={formik.handleChange}
            value={formik.values.adminPhoneNumber}
          />
          <Select
            label={'Country of Residence'}
            name={'countryOfResidence'}
            type={'text'}
            placeholder={'Enter last name'}
            required={true}
            onChange={formik.handleChange}
            value={formik.values.countryOfResidence}
          >
            <option>Select country</option>
            <option value="nigeria">Nigeria</option>
            <option value="ghana">Ghana</option>
            <option value="ethiopia">Ethiopia</option>
          </Select>
          <Select
            label={'State of Residence'}
            name={'stateOfResidence'}
            type={'text'}
            placeholder={'Enter last name'}
            required={true}
            onChange={formik.handleChange}
            value={formik.values.stateOfResidence}
          >
            <option>Select state</option>
            <option value="lagos">Lagos</option>
            <option value="oyo">Oyo</option>
            <option value="portHarcourt">Port Harcourt</option>
          </Select>

          <label>gender</label>
          <select
            className="select select-bordered w-full"
            name={'gender'}
            type={'gender'}
            label={'gender'}
            placeholder={'Enter gender'}
            required={true}
            onChange={formik.handleChange}
            value={formik.values.gender}
          >
            <option></option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="others">Others</option>
          </select>

          <label className="label-text">Upload Organization Logo</label>
          <input
            name={'uploadOrganizationLogo'}
            placeholder={'No file chosen'}
            required={true}
            onChange={formik.handleChange}
            value={undefined}
            type="file"
            className="file-input file-input-bordered w-full mb-3"
          />
          <button className="btn w-full text-white" type="submit">
            Next
          </button>
        </form>
      </Formik>
      <p>
        Have an account?{' '}
        <Link to="./completeprofile" className="text-green-500">
          Sign In
        </Link>
      </p>
    </AuthLayout>
  );
};

export default CompleteProfile;
