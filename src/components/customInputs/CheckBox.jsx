import { useState } from 'react';

const CheckBox = ({ options = [], checked, className }) => {
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);

  return (
    <div>
      {options.map((option) => (
        <label key={option.position} className="flex py-1">
          <input
            className={`checkbox ${className}`}
            type="checkBox"
            name="option"
            value={option.position}
            onChange={() => setIsChecked((prev) => !prev)}
          />
          <span className="mx-3">{option.label}</span>
        </label>
      ))}
      <p className="text-xs">{isChecked}</p>
    </div>
  );
};

export default CheckBox;
