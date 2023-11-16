import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { userActions } from '../../../redux/actions';

const Step4 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formData = useSelector((state) => state);

  const formik = useFormik({
    initialValues: {
      age: formData.age,
      gender: formData.gender,
    },
    validationSchema: Yup.object({
      age: Yup.string().required('Age is required'),
      gender: Yup.string().required('Gender is required'),
    }),
    onSubmit: handleSubmit,
  });

  const handleChange = (e) => {
    formik.handleChange(e);
  };

  function handleSubmit() {
    dispatch(userActions.chooseEmail(formik.values.firstName));
    dispatch(userActions.choosePassword(formik.values.gender));
    dispatch(userActions.completedStep('step4'));
    navigate('./result');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mx auto form-control w-full ">
          <label className="label">
            <span className="label-text">Age: </span>
          </label>
          <input
            className="input input-bordered w-full "
            type="text"
            name="age"
            value={formik.values.age}
            onChange={handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.age && formik.errors.age ? <div>{formik.errors.age}</div> : null}
        </div>

        <div className="mx auto form-control w-full ">
          <label className="label">
            <span className="label-text">Gender</span>
          </label>
          <input
            className="input input-bordered w-full "
            type="text"
            name="gender"
            value={formik.values.gender}
            onChange={handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.gender && formik.errors.gender ? <div>{formik.errors.gender}</div> : null}
        </div>
        <div className="flex justify-center">
          <input className="mt-4 btn w-full  text-white" type="submit" value="Next" />
        </div>

        <Link className="flex justify-center" to="/step2">
          <button className="mt-2 btn w-full  text-white">Back</button>
        </Link>
      </form>
    </div>
  );
};

export default Step4;
