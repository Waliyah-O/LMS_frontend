import { useState } from 'react';

const RadioButton = ({ options = [], className }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (position) => {
    setSelectedOption(position);
  };

  return (
    <div>
      {options.map((option) => (
        <label key={option.position} className="flex py-1">
          <input
            className={`radio ${className}`}
            type="radio"
            name="option"
            value={option.position}
            checked={selectedOption === option.position}
            onChange={() => handleOptionChange(option.position)}
          />
          <span className="mx-3"> {option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
