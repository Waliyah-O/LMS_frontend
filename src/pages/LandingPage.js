import BgImg from '../assets/images/BgImg.jpeg';
import arrowRight from '../assets/svg/arrow-narrow-right.svg';
import { Link } from 'react-router-dom';
import Button from '../components/button';
import { ButtonSize, ButtonState } from '../components/button/enum';
import BFooterImg from '../assets/images/BFooterImg.jpeg';

const LandingPage = () => {
  return (
    <div>
      <section
        style={{
          background: `linear-gradient(0deg, rgba(17, 25, 40, 0.80) 0%, rgba(17, 25, 40, 0.80) 100%), url(${BgImg}) lightgray 50% / cover no-repeat`,
        }}
        className="h-screen"
      >
        <header className="text-white text-sm flex justify-end items-center gap-3 p-7 mx-14 font-inter">
          <Link>Why i-Academy</Link>
          <Link>Organization Benefits</Link>
          <Link>FAQs</Link>
          <Link>Contact us</Link>

          <Button variant={ButtonState.TRANSPARENT} size={ButtonSize.md} value="Sign Up" />
          <Button variant={ButtonState.SECONDARY} size={ButtonSize.md} value="Book a demo" />
        </header>

        <aside className="w-full flex items-start justify-center flex-col gap-6 p-16">
          <h1 className="text-white font-sora text-xxl-heading w-3/5">
            Seamless Learning management processes from Start to Finish.
          </h1>

          <p className="text-slate-400 w-1/2">
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

      <section className="bg-black">
        <div className="w-4/5 flex mx-auto">
          <div className="w-1/2">
            <img src={BFooterImg} className="object-contain" />
          </div>
          <div>
            <h3 className="text-white font-inter">Empower your business with a victorious digital advantage.</h3>
            <div className="flex">
              <Button variant={ButtonState.SECONDARY} size={ButtonSize.md} value="Book a demo" />
              <Button variant={ButtonState.TRANSPARENT} size={ButtonSize.md} value="Sign Up" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
