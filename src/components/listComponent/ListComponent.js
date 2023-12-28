import LogoBullets from '../../assets/svg/LogoBullets.svg';
import Button from '../button';
import { ButtonSize, ButtonState } from '../button/enum';
import { useNavigate } from 'react-router-dom';

const ListComponent = ({
  listItems = [],
  headerText,
  src,
  listTextColor,
  bodyTextOne,
  bodyTextTwo,
  isButton,
  bg,
  flexDirection,
}) => {
  const navigate = useNavigate();
  const goToSignUp = () => {
    navigate('/signup');
  };
  const goToDemo = () => {
    navigate('/demo');
  };
  return (
    <div>
      <section className={`${bg} font-sora`}>
        <div className={`w-full p-4 lg:p-24 flex flex-col items-center py-6 lg:${flexDirection} gap-8`}>
          <div className="p-3 lg:w-1/2">
            <img src={src} className="rounded-md" alt="Image" />
          </div>

          <div className={`w-full ${listTextColor} lg:w-1/2 gap-6 flex flex-col justify-between p-10`}>
            <h3 className="font-sora font-semibold text-xl lg:text-iv">{headerText}</h3>

            <div>
              {listItems ? (
                <ul className="font-inter text-labels list-none">
                  {listItems.map((item) => (
                    <li key={item.id} className="flex items-center gap-3 p-2 my-1">
                      <img className="h-8 w-8" src={LogoBullets} />
                      <span>{item.element}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <section className="flex flex-col gap-6">
                  <p>{bodyTextOne}</p>
                  <p>{bodyTextTwo}</p>
                </section>
              )}
            </div>

            {isButton && (
              <div className="flex flex-col lg:flex-row gap-3">
                <Button onClick={goToDemo} variant={ButtonState.SECONDARY} size={ButtonSize.md} value="Book a demo" />
                <Button onClick={goToSignUp} variant={ButtonState.MOBILE} size={ButtonSize.md} value="Sign Up" />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListComponent;
