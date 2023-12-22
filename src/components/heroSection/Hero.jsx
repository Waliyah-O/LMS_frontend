import heroImg from '../../assets/images/heroImg.jpeg';
import BgImg from '../../assets/images/BgImg.jpeg';
import { Link, useLocation } from 'react-router-dom';
import Button from '../button';
import { ButtonSize, ButtonState } from '../button/enum';
import arrowRight from '../../assets/svg/arrow-narrow-right.svg';

const Hero = ({ mainText, isButton }) => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/' ? (
        <section
          style={{
            background: `linear-gradient(0deg, rgba(17, 25, 40, 0.80) 0%, rgba(17, 25, 40, 0.80) 100%), url(${heroImg}) lightgray 50% / cover no-repeat`,
          }}
          className="h-screen flex flex-col justify-between"
        >
          <header className="text-white text-sm hidden lg:flex flex-col lg:flex-row lg:justify-end items-center gap-3 p-4 lg:p-7 mx-4 lg:mx-14 font-inter">
            <Link>Why i-Academy</Link>
            <Link>Organization Benefits</Link>
            <Link>FAQs</Link>
            <Link>Contact us</Link>

            <Button variant={ButtonState.TRANSPARENT} size={ButtonSize.md} value="Sign Up" />
            <Button variant={ButtonState.SECONDARY} size={ButtonSize.md} value="Book a demo" />
          </header>

          <section className="flex flex-col items-center gap-8">
            <h1 className="text-white font-sora font-extrabold text-xxl lg:text-xxl-heading lg:w-3/5 text-center">{mainText}</h1>

            {isButton && (
              <Button
                variant={ButtonState.SECONDARY}
                size={ButtonSize.lg}
                iconRight={<img src={arrowRight} alt="Arrow Right" />}
                value="Book a demo"
              />
            )}
          </section>

          <div></div>
        </section>
      ) : (
        <section
          style={{
            background: `linear-gradient(0deg, rgba(17, 25, 40, 0.80) 0%, rgba(17, 25, 40, 0.80) 100%), url(${BgImg}) lightgray 50% / cover no-repeat`,
          }}
          className="h-screen"
        >
          <header className="text-white text-sm hidden lg:flex flex-col lg:flex-row lg:justify-end items-center gap-3 p-4 lg:p-7 mx-4 lg:mx-14 font-inter">
            <Link>Why i-Academy</Link>
            <Link>Organization Benefits</Link>
            <Link>FAQs</Link>
            <Link>Contact us</Link>

            <Button variant={ButtonState.TRANSPARENT} size={ButtonSize.md} value="Sign Up" />
            <Button variant={ButtonState.SECONDARY} size={ButtonSize.md} value="Book a demo" />
          </header>

          <aside className="w-full flex flex-col items-center lg:items-start justify-center lg:justify-between lg:flex-wrap gap-6 p-4 lg:p-16">
            <h1 className="text-white font-sora font-extrabold text-xxl lg:text-xxl-heading lg:w-3/5 text-center lg:text-left">
              Seamless Learning management processes from Start to Finish.
            </h1>

            <p className="text-slate-400 w-full lg:w-1/2 text-center lg:text-left">
              Experience a comprehensive and flawless training journey that covers every stage, from initial job posting to final
              candidate onboarding, fostering a seamless and integrated Learning systems.
            </p>

            <Button
              variant={ButtonState.SECONDARY}
              size={ButtonSize.lg}
              iconRight={<img src={arrowRight} alt="Arrow Right" />}
              value="Book a demo"
            />
          </aside>
        </section>
      )}
    </div>
  );
};

export default Hero;
