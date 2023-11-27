import { useState } from 'react';
import { ButtonState, ButtonSize } from './ButtonState';

const CustomButton = ({ children, state, size }) => {
  const [loading, setLoading] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleCLick = () => {
    if (!loading && !clicked) {
      setLoading(true);
      setClicked(true);
    }
  };

  const ButtonClass = () => {
    if (state === 'PRIMARY') {
      return ButtonState.PRIMARY;
    } else if (state === 'DISABLE') {
      return ButtonState.DISABLE;
    } else {
      return ButtonState.PRIMARY;
    }
  };

  return (
    <div className={ButtonClass()}>
      <button onClick={handleCLick} disabled={loading}>
        {loading ? (
          <button>
            <span className="loading loading-spinner"></span>
          </button>
        ) : (
          <span className="text-white">{children}</span>
        )}
      </button>
    </div>
  );
};

export default CustomButton;
