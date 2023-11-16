const CustomInputs = ({ inputType, placeholder }) => {
  return (
    <div>
      <input type={inputType} placeholder={placeholder} className="input input-bordered w-full max-w-xs" />
    </div>
  );
};

export default CustomInputs;
