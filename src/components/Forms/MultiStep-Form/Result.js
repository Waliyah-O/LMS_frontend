import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { chooseFirstName, chooseLastName, completeStep } from '../../../redux/actions';
// import CustomInputs from '../../customInputs/CustomInputs';

const Step1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const firstName = useSelector((state) => state.firstName);
  const lastName = useSelector((state) => state.firstName);

  const formik = useFormik({
    initialValues: {
      firstName: firstName,
      lastName: lastName,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
    }),
    onSubmit: handleSubmit,
  });

  function handleSubmit(values) {
    dispatch(chooseFirstName(values.firstName));
    dispatch(chooseLastName(values.lastName));
    dispatch(completeStep('step1'));
    navigate('./step2');
  }

  return (
    <Formik>
      <form onSubmit={formik.handleSubmit}>
        <div className="md-4">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input
            id="firstName"
            className="input input-bordered w-full"
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="text-red-700">
            {formik.touched.firstName && formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}
          </div>
        </div>

        <div className="mb-4">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input
            id="lastName"
            className="input input-bordered w-full"
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="text-red-700">
            {formik.touched.lastName && formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}
          </div>
        </div>

        <div className="flex justify-center">
          <input className="btn w-full max-w-xs text-white" type="submit" value="Next" />
        </div>
      </form>
    </Formik>
  );
};

export default Step1;
