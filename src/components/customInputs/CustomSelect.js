import FormError from '../error/FormError';

const Select = ({ children, name, info, id, label, formik, ...props }) => {
  return (
    <div>
      <label className="label" htmlFor={props.id}>
        {label}
      </label>
      <div
        className={`input__container rounded-lg border ${
          formik && formik?.errors[name]
            ? 'border border-error-main shadow-error focus-within:shadow-error focus-within:border-error-main '
            : 'focus-within:shadow-active focus-within:border-primary-500 '
        }${!props?.disabled ? (props?.value ? 'border-neutral-600' : 'border-neutral-300') : ''}`}
      >
        <select className="select select-bordered w-full" name={name} id={id} {...props}>
          {children}
        </select>
      </div>
      {info && <span className={'input__info text-neutral-300'}>{info}</span>}
      <FormError errors={formik && formik?.errors} name={name} value={formik && formik.values[name]} />
    </div>
  );
};

export default Select;
