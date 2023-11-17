import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { chooseAge, chooseGender, completeStep } from '../../../redux/actions';

const Step3 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const age = useSelector((state) => state.age);
  const gender = useSelector((state) => state.firstName);

  const formik = useFormik({
    initialValues: {
      age: age,
      gender: gender,
    },
    validationSchema: Yup.object({
      age: Yup.string().required('Age is required'),
      gender: Yup.string().required('Gender is required'),
    }),
    onSubmit: handleSubmit,
  });

  function handleSubmit(values) {
    dispatch(chooseAge(values.age));
    dispatch(chooseGender(values.gender));
    dispatch(completeStep('step3'));
    navigate('./step4');
  }

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="mx auto form-control w-full ">
          <label className="label">
            <span className="label-text">Age: </span>
          </label>
          <input
            className="input input-bordered w-full "
            type="number"
            name="age"
            value={formik.values.age}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.age && formik.errors.age ? <div>{formik.errors.age}</div> : null}
        </div>

        <div className="mx auto form-control w-full ">
          <label className="label">
            <span className="label-text">Gender</span>
          </label>
          <select
            className="input input-bordered w-full"
            id="gender"
            name="gender"
            value={formik.values.gender}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value=""></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
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

export default Step3;
