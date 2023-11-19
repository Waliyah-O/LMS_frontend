import { Field, ErrorMessage } from 'formik';

function Select(props) {
  const { label, name, options = [], ...rest } = props;
  return (
    <div>
      <label className="label-text" htmlFor={name}>
        {label}
      </label>
      <Field  as="select" id={name} name={name} {...rest} className="input input-bordered w-full">
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component="div" className="error" />
    </div>
  );
}

export default Select;
