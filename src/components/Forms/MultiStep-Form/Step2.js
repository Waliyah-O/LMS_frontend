import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { userActions } from '../../../redux/actions';

const Step2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formData = useSelector((state) => state);

  const formik = useFormik({
    initialValues: {
      firstName: formData.firstName || '',
      lastName: formData.lastName || '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
    }),
    onSubmit: handleSubmit,
  });

  const handleChange = (e) => {
    formik.handleChange(e);
  };

  function handleSubmit() {
    dispatch(userActions.chooseEmail(formik.values.email));
    dispatch(userActions.choosePassword(formik.values.password));
    dispatch(userActions.completedStep('Step2'));
    navigate('./step3');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mx auto form-control w-full ">
          <label className="label">
            <span className="label-text">Email: </span>
          </label>
          <input
            className="input input-bordered w-full "
            type="text"
            name="email"
            value={formik.values.email}
            onChange={handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
        </div>

        <div className="mx auto form-control w-full ">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            className="input input-bordered w-full "
            type="text"
            name="password"
            value={formik.values.password}
            onChange={handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
        </div>

        <div className="flex flex-row-reverse items-center justify-between mt-4 mx-4 ">
          <div className="">
            <input className="btn w-32 text-white" type="submit" value="Next" />
          </div>

          <Link className="" to="/">
            <button className="btn w-32 text-white">Back</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Step2;
