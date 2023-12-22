// import BgImg from '../assets/images/BgImg.jpeg';
// import arrowRight from '../assets/svg/arrow-narrow-right.svg';
import featuresArrow from '../../assets/svg/features-arrow.svg';
import courseMgt from '../../assets/images/courseManagement.png';
import userMgt from '../../assets/images/user-management.png';
import trackAndRep from '../../assets/images/tracking-and-reportimg.png';
import assessTools from '../../assets/images/assessment-tools.png';
import BFooterImg from '../../assets/images/BFooterImg.jpeg';
// import { Link } from 'react-router-dom';
import Button from '../../components/button';
import { ButtonSize, ButtonState } from '../../components/button/enum';
import Card from '../../components/cards/Card';
// import Navbar from '../../components/navbar/Navbar';
import ListComponent from '../../components/customInputs/listComponent/ListComponent';
// import Footer from '../../components/footer/Footer';
import Hero from '../../components/heroSection/Hero';
// import FeaturesComponent from '../components/featuresComponent/FeaturesComponent';

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

  const listContent = [
    {
      id: 1,
      element: 'Centralized organization',
    },
    {
      id: 2,
      element: 'Enhanced accessibility',
    },
    {
      id: 3,
      element: 'Improved communication',
    },
    {
      id: 4,
      element: 'Streamlined grading and feedback',
    },
    {
      id: 5,
      element: 'Effective tracking and reporting',
    },
  ];

  return (
    <div>
      <Hero />

      <section className="h-full flex w-full p-4 lg:p-24 flex-col gap-6">
        <article className="flex flex-col gap-4 self-stretch w-full h-auto items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-center font-sora text-xl sm:text-2xl md:text-3xl lg:text-l-headline font-bold text-gray-900">
              Unleash the Power of Intuitive <br /> System Management.
            </h2>

            <h2 className="text-center font-inter text-sm sm:text-base md:text-lg lg:text-xl p-4 lg:w-4/6">
              Our solution includes reporting and analytics tools that provide insights into user engagement, completion rates,
              assessment scores, and other metrics. These can be used to evaluate the effectiveness of training programs.
            </h2>
          </div>
        </article>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {featuresContent.map((feature) => (
            <div
              style={{
                background: `linear-gradient(1deg, #020001 0.74%, rgba(2, 0, 1, 0.00) 98.73%), url(${feature.background}) lightgray 50% / cover no-repeat`,
              }}
              className="border-b-red-550 hover:border-none border-b-8 rounded-t-xl"
              key={feature.title}
            >
              <Card>
                <div
                  className={`absolute bg-transparent -bottom-36 p-8 sm:-bottom-24 w-full sm:p-10 flex flex-col group-hover:bottom-2 group-hover:duration-600 duration-500 gap-2 transition-all ease-out`}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-white-400 font-extrabold text-lg md:text-2xl lg:text-l-headline">{feature.title}</span>
                    <img className="group-hover:invisible" src={featuresArrow} alt="arrow" />
                  </div>
                  <p className="text-slate-100 text-sm -my-0">{feature.description}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black font-sora">
        <div className="w-full p-4 lg:p-24 flex flex-col items-center py-6 lg:flex-row gap-8">
          <div className="p-3 lg:w-9/12">
            <img src={BFooterImg} className="rounded-md" alt="Footer Image" />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col p-4">
            <h3 className="text-white font-sora font-semibold text-xl lg:text-iv">
              Empower your business with a victorious digital advantage.
            </h3>

            <div>
              <ListComponent listItems={listContent} />
            </div>

            <div className="flex flex-col lg:flex-row gap-3">
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
