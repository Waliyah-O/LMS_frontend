import { useState } from 'react';
import ErrorMark from '../../assets/svg/redError.svg';

const CustomRadioButton = ({ options = [], className, onBlur, name, labelText, inputError, id }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <div>
      <label className="label" htmlFor={id}>
        <span className="label-text text-lg">{labelText}</span>
      </label>

      <div className="relative">
        {options.map((option) => (
          <label key={option.position} className="flex py-1">
            <input
              className={`checkbox ${inputError ? 'input-error' : ''} ${className || ''}`}
              type="checkbox"
              name={name}
              onBlur={onBlur}
              checked={selectedOption === option.position}
              onChange={() => handleOptionChange(option.position)}
            />
            <span className="mx-3">{option.label}</span>
          </label>
        ))}
      </div>

      {inputError && (
        <label className="label">
          <span className="label-text-alt text-red-600 flex gap-1">
            <img src={ErrorMark} alt="error mark" />
            {inputError}
          </span>
        </label>
      )}
    </div>
  );
};

export default CustomRadioButton;
