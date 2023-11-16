import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { chooseFirstName, chooseLastName, completeStep } from '../../../redux/actions';

const Step1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const firstName= useSelector((state) => state.firstName)
  const lastName= useSelector((state) => state.lastName)

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
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
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
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="text-red-500">{formik.errors.firstName}</div>
          ) : null}
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
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="text-red-500">{formik.errors.lastName}</div>
          ) : null}
        </div>

        <div className="flex justify-center">
          <button className="btn w-full text-white" type="submit">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step1;
