const Loader = ({ size }) => {
  return (
    <div>
      <span className={`loading loading-spinner loading-${size}`}></span>
    </div>
  );
};

export default Loader;
