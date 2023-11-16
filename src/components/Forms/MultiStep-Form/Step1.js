// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { userActions } from '../../../redux/actions';
// // import CustomInputs from '../../customInputs/CustomInputs';

// const Step1 = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const formData = useSelector((state) => state);

//   const formik = useFormik({
//     initialValues: {
//       firstName: formData.firstName,
//       lastName: formData.lastName,
//     },
//     validationSchema: Yup.object({
//       firstName: Yup.string().required('First Name is required'),
//       lastName: Yup.string().required('Last Name is required'),
//     }),
//     onSubmit: handleSubmit,
//   });

//   const handleChange = (e) => {
//     formik.handleChange(e);
//   };

//   function handleSubmit() {
//     dispatch(userActions.chooseFirstName(formik.values.firstName));
//     dispatch(userActions.chooseLastName(formik.values.lastName));
//     dispatch(userActions.completedStep('step1'));
//     navigate('./step2');
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label className="label">
//             <span className="label-text">First Name</span>
//           </label>
//           <input
//             className="input input-bordered w-full "
//             type="text"
//             name="firstName"
//             value={formik.values.firstName}
//             onChange={handleChange}
//             onBlur={formik.handleBlur}
//           />
//           {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
//         </div>

//         <div>
//           <label className="label">
//             <span className="label-text">Last Name</span>
//           </label>
//           <input
//             className="input input-bordered w-full "
//             type="text"
//             name="lastName"
//             value={formik.values.lastName}
//             onChange={handleChange}
//             onBlur={formik.handleBlur}
//           />
//           {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
//         </div>
//         <div className="flex justify-center">
//           <input className="btn w-full max-w-xs text-white" type="submit" value="Next" />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Step1;
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { userActions } from '../../../redux/actions';

const Step1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formData = useSelector((state) => state);

  const formik = useFormik({
    initialValues: {
      firstName: formData.firstName,
      lastName: formData.lastName,
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
    dispatch(userActions.chooseFirstName(formik.values.firstName));
    dispatch(userActions.chooseLastName(formik.values.lastName));
    dispatch(userActions.completedStep('step1'));
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
            onChange={handleChange}
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
            onChange={handleChange}
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
