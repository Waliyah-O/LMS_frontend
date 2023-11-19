// FormikController.js
import Select from "../components/customInputs/CustomSelect";

function FormikController(props) {
  const { control, label, name, options, ...rest } = props;

  switch (control) {
    case 'select':
      return (
        <Select
          label={label}
          name={name}
          options={options}
          {...rest}
        />
      );
    default:
      return null;
  }
}

export default FormikController;
