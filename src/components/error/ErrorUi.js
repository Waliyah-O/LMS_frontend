export const ErrorUI = ({ error, resetErrorBoundary }) => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center" role="alert">
        <div className="max-w-md">
          <p>Something went wrong!</p>
          <pre>{error.message}</pre>
          <button className="btn w-full text-white" onClick={resetErrorBoundary}>
            Try again
          </button>
        </div>
      </div>
    </div>
  );
};
