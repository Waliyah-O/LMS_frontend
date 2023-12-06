import BgImg from '../assets/images/BgImg.jpeg';
import arrowRight from '../assets/svg/arrow-narrow-right.svg';
import featuresArrow from '../assets/svg/features-arrow.svg';
import courseMgt from '../assets/images/courseManagement.png';
import userMgt from '../assets/images/user-management.png';
import trackAndRep from '../assets/images/tracking-and-reportimg.png';
import assessTools from '../assets/images/assessment-tools.png';
import { Link } from 'react-router-dom';
import Button from '../components/button';
import { ButtonSize, ButtonState } from '../components/button/enum';
import Card from '../components/cards/Card';
import BFooterImg from '../assets/images/BFooterImg.jpeg';

const LandingPage = () => {
  const featuresContent = [
    {
      title: 'Course management',
      description:
        'Seamlessly create, organize, and deliver engaging courses with our intuitive Course Management system. From curriculum design to content delivery, we empower educators to craft dynamic learning experiences.',
      background: courseMgt,
    },
    {
      title: 'User management',
      description:
        'Say goodbye to administrative hassles with our powerful User Management tools. Easily onboard students, instructors, and administrators with a few clicks. Our user-friendly interface ensures everyone can navigate with ease.',
      background: userMgt,
    },
    {
      title: 'Tracking and reporting',
      description:
        'Empower data-driven decision-making with our robust Tracking and Reporting features. Monitor learner progress, engagement, and performance effortlessly. Gain real-time insights into course effectiveness and user activity.',
      background: trackAndRep,
    },
    {
      title: 'Assessment tools',
      description:
        'Create dynamic quizzes, exams, and assignments to evaluate learner understanding. Enjoy customizable grading options, real-time feedback, and adaptive assessments that cater to diverse learning styles.',
      background: assessTools,
    },
  ];

  return (
    <div>
      <section
        style={{
          background: `linear-gradient(0deg, rgba(17, 25, 40, 0.80) 0%, rgba(17, 25, 40, 0.80) 100%), url(${BgImg}) lightgray 50% / cover no-repeat`,
        }}
        className="h-screen"
      >
        <header className="text-white text-sm flex flex-col lg:flex-row lg:justify-end items-center gap-3 p-4 lg:p-7 mx-4 lg:mx-14 font-inter">
          <Link>Why i-Academy</Link>
          <Link>Organization Benefits</Link>
          <Link>FAQs</Link>
          <Link>Contact us</Link>

          <Button variant={ButtonState.TRANSPARENT} size={ButtonSize.md} value="Sign Up" />
          <Button variant={ButtonState.SECONDARY} size={ButtonSize.md} value="Book a demo" />
        </header>

        <aside className="w-full flex flex-col items-center  lg:items-start justify-center lg:justify-between lg:flex-wrap gap-6 p-4 lg:p-16">
          <h1 className="text-white font-sora text-xxl lg:text-xxl-heading lg:w-3/5 text-center lg:text-left">
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

      <section className=" h-full flex w-full p-24 flex-col gap-14 ">
        <article className="flex flex-col gap-4 self-stretch border w-full h-52 items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <h2 className="self-stretch text-center font-sora text-l-headline font-bold text-gray-900">
              Unleash the Power of Intuitive <br /> System Management.
            </h2>
            <h2 className="w-9/12 text-center font-inter font-normal text-xl">
              Our solution includes reporting and analytics tools that provide insights into user engagement, completion rates,
              assessment scores, and other metrics. These can be used to evaluate the effectiveness of training programs.
            </h2>
          </div>
        </article>
        <div className="">
          <div className="grid grid-cols-2 gap-3">
            {featuresContent.map((feature) => {
              return (
                <div
                  style={{
                    background: `linear-gradient(1deg, #020001 0.74%, rgba(2, 0, 1, 0.00) 98.73%), url(${feature.background}) lightgray 50% / cover no-repeat`,
                  }}
                  className='border-b-red-550 hover:border-none border-b-8'
                  key={feature.title}
                >
                  <Card>
                    <div
                      className={`absolute bg-transparent -bottom-24 w-full p-10 flex flex-col group-hover:bottom-20 group-hover:duration-600 duration-500 gap-2`}
                    >
                      <div className="flex justify-between">
                        <span className="text-white-400 font-extrabold text-l-headline">{feature.title}</span>
                        <img className="group-hover:invisible" src={featuresArrow} alt="arrow" />
                      </div>
                      <p className="text-slate-100 text-sm">{feature.description}</p>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-black font-sora">
        <div className="w-4/5 flex mx-auto justify-content">
          <div className="w-1/2">
            <img src={BFooterImg} className="object-contain" />
          </div>
          <div>
            <h3 className="text-white font-sora fontWeight-thin text-sm">
              Empower your business with a victorious digital advantage.
            </h3>
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
