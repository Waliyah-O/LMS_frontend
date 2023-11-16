import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { userActions } from '../../../redux/actions';

const Step3 = () => {
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
    dispatch(userActions.chooseAge(formik.values.age));
    dispatch(userActions.chooseGender(formik.values.gender));
    dispatch(userActions.completedStep('step3'));
    navigate('./step4');
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

export default Step3;
