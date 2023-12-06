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
import Navbar from '../components/navbar/Navbar';

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
      <Navbar />

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

      <footer className="footer bg-gray-700 text-neutral-content h-40 flex justify-between items-center">
        <aside className="pl-16">
          <svg width="130" height="33" viewBox="0 0 130 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.22748 0.171202C6.0635 0.262318 5.91123 0.496616 5.8761 0.691867C5.82924 0.991249 5.47786 1.2646 3.6038 2.46213C1.57748 3.76379 1.35493 3.88094 1.0504 3.76379C0.195359 3.42536 -0.390284 4.54479 0.312488 5.15657C0.581884 5.40389 0.605309 5.495 0.605309 6.60142C0.605309 7.31733 0.546745 7.89007 0.464755 8.04627C0.347627 8.25453 0.347627 8.35867 0.464755 8.56693C0.546745 8.72313 0.605309 9.28285 0.605309 9.9467C0.605309 10.988 0.581884 11.0922 0.312488 11.3265C-0.0154721 11.6128 -0.0740364 12.1465 0.183647 12.537C0.324201 12.7583 0.687299 12.8234 1.19095 12.7062C1.28466 12.6802 2.38566 13.305 3.61551 14.099C5.40758 15.2314 5.8761 15.5829 5.8761 15.8042C5.8761 16.1426 6.22748 16.5071 6.53202 16.5071C6.8834 16.5071 7.28164 16.1426 7.28164 15.8172C7.28164 15.5829 7.7033 15.2575 9.56565 14.06C11.51 12.8104 11.8965 12.6151 12.1659 12.6932C12.5876 12.8104 12.7984 12.7583 12.9858 12.498C13.2318 12.1335 13.1615 11.5998 12.8452 11.3265L12.5524 11.0661V8.24152V5.41691L12.8452 5.15657C13.5597 4.53177 12.9624 3.42536 12.0956 3.76379C11.7794 3.88094 11.5803 3.78983 9.55393 2.48816C7.62131 1.25158 7.3402 1.0303 7.25821 0.678849C7.19965 0.44455 7.04738 0.223267 6.87169 0.132151C6.50859 -0.0500813 6.59058 -0.0500813 6.22748 0.171202ZM6.08693 1.51191C6.07521 1.56398 5.71212 2.26688 5.31388 3.07391L4.56426 4.53177H2.99473C2.12798 4.53177 1.42521 4.47971 1.42521 4.42764C1.42521 4.32351 5.85267 1.4208 6.02836 1.40778C6.08693 1.40778 6.11035 1.45985 6.08693 1.51191ZM9.48366 2.90469C10.7252 3.68569 11.7325 4.37558 11.7325 4.44066C11.7325 4.49272 11.018 4.51876 10.1396 4.50574L8.54663 4.46669L7.797 3.03486C7.07081 1.64208 6.94197 1.3427 7.14109 1.43382C7.19965 1.44683 8.25381 2.11068 9.48366 2.90469ZM6.46174 2.86565C6.45003 4.40161 6.36804 4.53177 5.47786 4.53177C4.98592 4.53177 4.81023 4.47971 4.84536 4.36256C4.93907 3.95904 6.18063 1.66811 6.32119 1.66811C6.4266 1.66811 6.46174 1.99353 6.46174 2.86565ZM7.65645 3.03486C8.03126 3.75078 8.3358 4.37558 8.3358 4.42764C8.3358 4.49272 8.04298 4.53177 7.69159 4.53177C6.71942 4.53177 6.57887 4.31049 6.57887 2.82659C6.57887 1.78526 6.60229 1.6551 6.77799 1.69415C6.8834 1.72018 7.28164 2.31895 7.65645 3.03486ZM8.90973 5.45596C9.17912 5.97662 9.37824 6.40617 9.36653 6.41919C9.07371 6.64047 6.76627 8.04627 6.68428 8.04627C6.62572 8.04627 6.57887 7.38242 6.57887 6.57539C6.57887 4.80512 6.63743 4.70099 7.69159 4.62289C8.07811 4.59686 8.40607 4.57082 8.41779 4.55781C8.4295 4.54479 8.65204 4.94831 8.90973 5.45596ZM4.09574 5.44294C3.88491 5.87249 3.66237 6.22394 3.6038 6.22394C3.4164 6.22394 1.42521 4.90926 1.42521 4.77909C1.42521 4.71401 2.09284 4.66194 2.94788 4.66194H4.48227L4.09574 5.44294ZM6.32119 4.81814C6.46174 4.97434 6.53202 8.04627 6.39146 8.04627C6.28605 8.04627 4.07232 6.61444 3.92005 6.44522C3.81463 6.32807 3.8732 6.10679 4.20116 5.46897L4.61111 4.66194H5.39587C5.85267 4.66194 6.23919 4.72702 6.32119 4.81814ZM11.7325 4.77909C11.7325 4.89624 9.72963 6.22394 9.54222 6.22394C9.44852 6.22394 8.90973 5.27372 8.71061 4.76607C8.68718 4.70099 9.35482 4.66194 10.1981 4.66194C11.0415 4.66194 11.7325 4.71401 11.7325 4.77909ZM2.33881 5.65121C2.85418 5.97662 3.33441 6.31505 3.40468 6.39315C3.48667 6.5103 3.40468 6.75762 3.147 7.22622C2.93617 7.59068 2.73705 7.9161 2.6902 7.94213C2.5965 7.98118 1.19095 5.37786 1.19095 5.16959C1.19095 4.96132 1.36665 5.03942 2.33881 5.65121ZM11.9668 5.13054C11.9668 5.27372 10.5144 8.04627 10.4441 8.04627C10.3387 8.04627 9.60079 6.47125 9.67106 6.39315C9.7062 6.3541 10.1747 6.0417 10.7018 5.69026C11.6154 5.10451 11.9668 4.94831 11.9668 5.13054ZM1.83516 6.79667L2.60821 8.28057L1.8703 9.72541C1.46035 10.5194 1.09725 11.1572 1.0504 11.1703C1.00355 11.1703 0.968408 9.85558 0.968408 8.24152C0.968408 6.62745 0.991834 5.31277 1.01526 5.31277C1.03869 5.31277 1.40178 5.97662 1.83516 6.79667ZM12.201 8.24152C12.201 9.85558 12.1542 11.1703 12.0956 11.1703C11.9434 11.1703 10.6784 8.59297 10.6784 8.26755C10.6784 7.94213 11.9902 5.31277 12.1425 5.31277C12.1776 5.31277 12.201 6.62745 12.201 8.24152ZM10.2684 8.17643C10.3153 8.50185 9.7062 9.6343 9.41338 9.75145C9.19083 9.84256 8.93315 9.72541 7.98441 9.11363C7.3402 8.71011 6.83655 8.31962 6.84826 8.26755C6.85998 8.20247 7.45733 7.78593 8.1601 7.34337L9.44852 6.52332L9.84676 7.25225C10.0576 7.65577 10.2567 8.0723 10.2684 8.17643ZM5.10305 7.40845C5.78239 7.85102 6.34461 8.24152 6.34461 8.29358C6.3329 8.33263 5.74725 8.73615 5.03277 9.19173C4.16602 9.73843 3.6975 9.97273 3.61551 9.88161C3.55695 9.81653 3.33441 9.42603 3.12357 9.02251L2.74876 8.28057L3.17043 7.4475C3.40468 6.99192 3.65065 6.61444 3.73264 6.61444C3.80292 6.61444 4.4237 6.9789 5.10305 7.40845ZM3.17043 9.37396L3.54524 10.1159L2.45594 10.8318C1.85859 11.2223 1.31979 11.4957 1.27294 11.4436C1.21438 11.3785 1.5072 10.6886 1.91715 9.89463C2.3271 9.10061 2.6902 8.48883 2.72534 8.5409C2.77219 8.59296 2.97131 8.97045 3.17043 9.37396ZM6.46174 10.194V11.9513H5.7004C5.25531 11.9513 4.93907 11.8992 4.93907 11.8211C4.93907 11.743 4.81023 11.6258 4.64625 11.5608C4.40028 11.4566 3.83806 10.5324 3.82635 10.22C3.82635 10.1419 6.27433 8.47582 6.43831 8.43677C6.45003 8.43677 6.46174 9.23078 6.46174 10.194ZM7.89071 9.21776C9.28454 10.1029 9.33139 10.207 8.83945 11.2614L8.51149 11.9513H7.55104H6.57887V10.194C6.57887 9.23078 6.60229 8.43677 6.62572 8.43677C6.64915 8.43677 7.22308 8.78821 7.89071 9.21776ZM11.2523 9.95971C11.6505 10.7277 11.9316 11.3915 11.8848 11.4436C11.7325 11.6128 9.88189 10.3632 9.7999 10.0378C9.74134 9.76446 10.2801 8.56693 10.4558 8.56693C10.491 8.56693 10.8541 9.19173 11.2523 9.95971ZM4.00204 10.975C4.20116 11.3655 4.34171 11.743 4.29486 11.8211C4.17773 12.0294 1.42521 11.9903 1.42521 11.782C1.42521 11.6779 3.36954 10.3112 3.61551 10.2591C3.62723 10.2591 3.80292 10.5845 4.00204 10.975ZM10.6901 11.0141C11.2172 11.3525 11.674 11.7039 11.7091 11.7951C11.7442 11.9122 11.3929 11.9513 10.2216 11.9513C9.37824 11.9513 8.68718 11.9122 8.68718 11.8732C8.68718 11.5738 9.46023 10.4413 9.7062 10.3893C9.71791 10.3893 10.1513 10.6626 10.6901 11.0141ZM4.48227 12.3287C4.86879 12.5891 6.19234 14.9711 5.99322 15.0492C5.8761 15.1013 1.83516 12.55 1.54234 12.2637C1.40178 12.1075 1.57748 12.0814 2.74876 12.0814C3.88491 12.0814 4.17773 12.1205 4.48227 12.3287ZM6.46174 13.5263C6.46174 14.6067 6.4266 14.9581 6.32119 14.9191C6.13378 14.841 4.93907 12.6021 4.93907 12.3027C4.93907 12.1205 5.0562 12.0814 5.7004 12.0814H6.46174V13.5263ZM8.3358 12.1595C8.3358 12.3938 6.8834 14.9451 6.76627 14.906C6.68428 14.88 6.62572 14.3593 6.60229 13.4742L6.56715 12.0814H7.45733C7.93756 12.0814 8.3358 12.1205 8.3358 12.1595ZM11.674 12.1986C11.4748 12.4068 7.29335 15.0753 7.1528 15.0753C7.00053 15.0753 6.96539 15.1403 7.80872 13.4742L8.51149 12.0814H10.1513C11.1352 12.0814 11.7325 12.1335 11.674 12.1986Z"
              fill="white"
            />
            <path
              d="M73.3419 7.60307V11.456L72.932 11.0655C72.0535 10.2064 71.2219 9.81589 69.8632 9.62064C66.2791 9.12601 62.8941 11.7814 62.1562 15.6604C61.8985 17.0011 61.9336 19.1098 62.2147 20.3594C63.0463 23.978 65.7169 26.2689 69.1253 26.2689C70.7768 26.2689 72.0067 25.7873 73.0023 24.746L73.5762 24.1472V25.0844V26.0086H75.9188H78.2613V24.8892V23.7697L77.7928 23.171C76.7738 21.8953 76.153 19.8908 76.153 17.8732C76.153 15.8816 76.6684 14.1504 77.6991 12.6275L78.2613 11.8074V7.77228V3.75014H75.8016H73.3419V7.60307ZM71.6904 14.2155C72.1355 14.4758 72.7446 15.1787 72.9906 15.7254C73.2951 16.3893 73.4942 17.73 73.4005 18.511C73.3068 19.3311 72.85 20.4765 72.4283 20.9842C71.4093 22.1817 69.383 22.3119 68.1297 21.2445C67.5324 20.7499 67.0053 19.4612 66.9233 18.3548C66.7359 15.413 68.364 13.5256 70.7534 13.9292C71.0931 13.9942 71.5147 14.1244 71.6904 14.2155Z"
              fill="white"
            />
            <path
              d="M24.8042 9.76452C23.7735 12.3678 22.4851 15.596 21.9463 16.9627C20.0137 21.8309 18.409 25.8921 18.409 25.9572C18.409 25.9832 19.5569 26.0093 20.9741 26.0093H23.5275L24.2771 23.9526L25.0385 21.909L29.1848 21.87L33.3429 21.844L34.0808 23.9266L34.8304 26.0093H37.4541C38.8948 26.0093 40.0778 25.9572 40.0778 25.9051C40.0778 25.8401 39.9372 25.7229 39.7615 25.6318C39.1759 25.3324 38.1686 24.5254 37.583 23.8745C36.1774 22.3126 35.4981 20.4642 35.4629 18.1993C35.4629 17.4443 35.5215 16.416 35.6035 15.9214L35.7675 15.0102L33.788 10.0639L31.8085 5.11758L29.2434 5.07853L26.6666 5.05249L24.8042 9.76452ZM30.5552 14.1251L31.8554 17.7437L29.2785 17.7828C27.8496 17.7958 26.6666 17.7828 26.6314 17.7437C26.5611 17.6656 29.0911 10.5195 29.1848 10.5195C29.22 10.5195 29.829 12.1466 30.5552 14.1251Z"
              fill="white"
            />
            <path
              d="M83.4166 9.60857C79.5396 9.99907 76.67 13.2012 76.4709 17.3535C76.2952 20.7248 77.7359 23.5624 80.383 25.0984C81.8588 25.9445 82.8075 26.1788 84.9393 26.1918C86.9422 26.1918 87.8089 26.0226 89.0973 25.3457C90.1632 24.786 90.6786 24.2653 90.6786 23.7316C90.6786 23.3672 90.5146 23.1198 89.6127 22.0525L88.5468 20.8029L88.1837 21.1153C86.8368 22.2347 84.9744 22.5081 83.3346 21.8182C82.6201 21.5188 81.6714 20.4514 81.4606 19.7225L81.3317 19.2409H86.0051H90.6786V15.9607V12.6935L90.3858 12.264C89.9992 11.7043 88.7811 10.741 87.9378 10.3245C86.6845 9.71271 85.0447 9.45237 83.4166 9.60857ZM85.6772 13.5656C86.6142 13.9431 87.4458 15.0105 87.5981 16.0388L87.6684 16.5074H84.4708H81.2849L81.3668 16.0258C81.566 14.8022 82.3273 13.865 83.4166 13.5005C83.8968 13.3443 85.197 13.3834 85.6772 13.5656Z"
              fill="white"
            />
            <path
              d="M98.8891 9.67339C97.8818 9.92071 97.0268 10.4023 96.3123 11.1182L95.7149 11.717V10.8058V9.88166L95.1059 9.80356C94.7662 9.76451 93.7237 9.73848 92.7867 9.76451L91.0883 9.80356L91.0532 17.8999L91.0298 26.0093H93.4895H95.9492V21.3884C95.9492 17.0929 95.9609 16.7284 96.1834 16.0776C96.6051 14.841 97.4953 14.1641 98.7017 14.1641C99.463 14.1641 100.154 14.5026 100.494 15.0362C101.009 15.8693 101.033 16.1036 101.079 21.1541L101.126 26.0093H103.504C105.601 26.0093 105.893 25.9832 105.952 25.788C105.999 25.6708 106.022 23.6142 106.022 21.2061C106.011 16.2598 106.069 15.8172 106.795 15.0102C107.322 14.4245 107.896 14.1641 108.669 14.1641C109.442 14.1641 109.841 14.3334 110.333 14.854C111.047 15.622 111.094 16.0385 111.141 21.2582L111.188 25.9442L113.577 25.9832L115.978 26.0093V22.3386V18.6549L114.35 14.3724C113.448 12.0164 112.64 10.0379 112.558 9.98579C111.867 9.50418 109.396 9.42608 108.142 9.85563C107.229 10.168 106.139 10.91 105.472 11.678L105.003 12.2247L104.675 11.691C104.254 11.0141 103.188 10.2201 102.251 9.89468C101.243 9.53021 99.8261 9.43909 98.8891 9.67339Z"
              fill="white"
            />
            <path
              d="M41.9045 9.82929C40.2061 10.2328 38.5663 11.2481 37.5005 12.5628C36.8328 13.4089 36.0598 15.075 35.8724 16.0903C35.7084 16.9754 35.7084 18.9019 35.8724 19.787C36.0598 20.8283 36.8211 22.4684 37.5005 23.3015C38.2032 24.1736 39.5619 25.215 40.5107 25.6185C42.0568 26.2693 44.4462 26.4646 46.1094 26.0741C46.9645 25.8788 48.5574 25.0588 49.1313 24.5381L49.4593 24.2387L49.143 23.4577C48.9556 22.9631 48.8151 22.3513 48.7799 21.7525L48.7097 20.8153L47.8898 20.3337C47.2456 19.9562 47.0464 19.8912 47.0113 20.0343C46.9762 20.1385 46.6599 20.542 46.2968 20.9455C45.8166 21.4792 45.4886 21.7135 45.0553 21.8436C43.3686 22.3773 41.682 21.5573 41.0026 19.8651C40.7684 19.2794 40.7332 18.967 40.7332 17.8736C40.7332 16.7802 40.7801 16.4808 41.0026 15.9862C41.354 15.2312 41.8811 14.6064 42.4784 14.2549C43.1578 13.8514 44.8444 13.8514 45.5355 14.2549C45.9923 14.5283 46.7185 15.3093 46.9527 15.7909C47.0699 15.9992 47.2221 15.9471 48.698 15.088C49.5998 14.5673 50.3729 14.0987 50.4197 14.0337C50.4783 13.9816 50.2792 13.4219 49.9981 12.7841C49.5881 11.8729 49.3656 11.5345 48.9439 11.196C48.1592 10.5843 47.023 10.0245 46.0977 9.80326C45.067 9.55594 42.9587 9.56896 41.9045 9.82929Z"
              fill="white"
            />
            <path
              d="M53.7115 9.80287C52.1069 10.1283 49.7994 11.0785 49.7994 11.43C49.7994 11.5211 51.0644 14.5409 51.2635 14.9184C51.2752 14.9314 51.6735 14.7492 52.1537 14.5019C53.8521 13.6298 55.9135 13.4345 57.12 14.0203C57.7056 14.3066 58.303 15.0486 58.4552 15.6864C58.7129 16.7017 58.8535 16.6366 56.3352 16.6366C53.1025 16.6496 51.6032 17.0011 50.3968 18.0684C49.4012 18.9406 48.9092 20.4765 49.1084 22.1036C49.4246 24.6418 51.4861 26.2689 54.3674 26.2689C56.3938 26.2689 57.7056 25.6311 58.5021 24.2644L58.8769 23.6005L58.912 24.8111L58.9472 26.0086H61.2195H63.5035V24.9542C63.5035 23.978 63.48 23.8608 63.1521 23.4053C62.6953 22.7674 62.1565 21.4788 61.8988 20.4114C61.7583 19.7997 61.6997 19.0968 61.6997 17.8732C61.7114 15.9988 61.8871 15.0095 62.4493 13.7469L62.7773 13.005L62.3322 12.3151C61.5708 11.1176 60.1302 10.2064 58.4318 9.81589C57.3542 9.56857 54.9062 9.55556 53.7115 9.80287ZM58.5841 20.2552C58.5841 21.0362 58.5372 21.2185 58.2444 21.674C57.811 22.3379 57.2722 22.7024 56.4758 22.8976C54.6954 23.3141 53.3016 21.8953 53.9692 20.3463C54.3089 19.5393 54.8008 19.3701 56.8623 19.3701H58.5841V20.2552Z"
              fill="white"
            />
            <path
              d="M112.966 9.89443C113.002 9.98554 114.395 13.6823 116.082 18.0949C117.769 22.5075 119.139 26.2303 119.139 26.3475C119.139 26.6729 118.589 27.4148 118.167 27.6621C117.546 28.0136 116.375 27.9485 115.485 27.4799L114.747 27.1024L113.892 28.9508L113.048 30.8122L113.775 31.2027C115.016 31.8795 116.305 32.1789 117.675 32.0878C120.428 31.9186 121.974 30.721 123.344 27.6752C123.695 26.9072 128.65 13.6562 129.997 9.89443C130.044 9.76426 129.575 9.73823 127.748 9.76426L125.441 9.80331L124.82 11.4955C124.48 12.4197 123.672 14.6845 123.004 16.5069C122.348 18.3292 121.763 19.8782 121.716 19.9303C121.669 19.9953 120.791 17.7174 119.772 14.8928L117.921 9.73823H115.414C113.458 9.73823 112.92 9.77728 112.966 9.89443Z"
              fill="white"
            />
            <path
              d="M4.25942 21.6486L4.29456 26.1654L6.57857 26.1524H8.86257L8.89771 21.7007L8.92114 17.262L8.60489 17.3401C7.48046 17.6135 5.21987 17.5484 4.41169 17.21C4.24771 17.1319 4.23599 17.6395 4.25942 21.6486Z"
              fill="white"
            />
            <path
              d="M13.3727 19.826V21.5833H15.0008H16.6406L16.6757 19.8781C16.6991 18.9409 16.6874 18.1469 16.664 18.1208C16.6406 18.0948 15.8792 18.0688 14.9891 18.0688H13.3727V19.826Z"
              fill="white"
            />
          </svg>
        </aside>

        <div>
          <p className=" text-base opacity-60">© 2023 i-Academy, All rights reserved.</p>
        </div>

        <nav className="pr-3">
          <div className="flex gap-4 ">
            <a>
              <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22.4332 0.979417H1.98253C1.75265 0.976224 1.52439 1.01835 1.31078 1.10338C1.09718 1.18841 0.902417 1.31469 0.737621 1.475C0.572825 1.63532 0.441224 1.82652 0.350331 2.0377C0.259438 2.24888 0.211035 2.47589 0.207886 2.70578V23.3979C0.211035 23.6278 0.259438 23.8548 0.350331 24.066C0.441224 24.2772 0.572825 24.4684 0.737621 24.6287C0.902417 24.789 1.09718 24.9153 1.31078 25.0003C1.52439 25.0854 1.75265 25.1275 1.98253 25.1243H22.4332C22.6631 25.1275 22.8914 25.0854 23.105 25.0003C23.3186 24.9153 23.5134 24.789 23.6782 24.6287C23.8429 24.4684 23.9745 24.2772 24.0654 24.066C24.1563 23.8548 24.2047 23.6278 24.2079 23.3979V2.70578C24.2047 2.47589 24.1563 2.24888 24.0654 2.0377C23.9745 1.82652 23.8429 1.63532 23.6782 1.475C23.5134 1.31469 23.3186 1.18841 23.105 1.10338C22.8914 1.01835 22.6631 0.976224 22.4332 0.979417ZM7.48756 21.1887H3.86583V10.3235H7.48756V21.1887ZM5.6767 8.80235C5.17722 8.80235 4.69819 8.60394 4.345 8.25075C3.99182 7.89756 3.7934 7.41854 3.7934 6.91905C3.7934 6.41957 3.99182 5.94055 4.345 5.58736C4.69819 5.23417 5.17722 5.03575 5.6767 5.03575C5.94192 5.00568 6.21051 5.03196 6.46488 5.11288C6.71924 5.1938 6.95365 5.32753 7.15274 5.50533C7.35184 5.68312 7.51114 5.90096 7.6202 6.14459C7.72927 6.38821 7.78565 6.65213 7.78565 6.91905C7.78565 7.18598 7.72927 7.4499 7.6202 7.69352C7.51114 7.93715 7.35184 8.15499 7.15274 8.33278C6.95365 8.51058 6.71924 8.64431 6.46488 8.72523C6.21051 8.80615 5.94192 8.83243 5.6767 8.80235ZM20.5499 21.1887H16.9282V15.3577C16.9282 13.8969 16.4091 12.9432 15.0932 12.9432C14.6859 12.9462 14.2894 13.0739 13.957 13.3092C13.6246 13.5445 13.3723 13.876 13.234 14.2591C13.1396 14.5428 13.0986 14.8417 13.1133 15.1404V21.1766H9.49159C9.49159 21.1766 9.49159 11.3013 9.49159 10.3114H13.1133V11.8446C13.4423 11.2737 13.9209 10.8034 14.4974 10.4843C15.0739 10.1652 15.7265 10.0094 16.3849 10.0337C18.7994 10.0337 20.5499 11.5911 20.5499 14.9352V21.1887Z"
                  fill="#9CA3AF"
                />
              </svg>
            </a>

            <a>
              <svg width="33" height="25" viewBox="0 0 33 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.81773 2.84753L14.4114 13.001L6.76978 21.2563H8.48961L15.1799 14.0287L20.5854 21.2563H26.4381L18.4171 10.5316L25.5299 2.84753H23.8101L17.6487 9.50399L12.6704 2.84753H6.81773ZM9.34687 4.11436H12.0356L23.9085 19.9892H21.2198L9.34687 4.11436Z"
                  fill="#9CA3AF"
                />
              </svg>
            </a>

            <a>
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1508_285)">
                  <path
                    d="M17.6921 11.1754C17.5887 11.1259 17.4837 11.0782 17.3774 11.0325C17.1921 7.61915 15.327 5.665 12.1952 5.645C12.181 5.64492 12.1669 5.64492 12.1528 5.64492C10.2795 5.64492 8.72164 6.44449 7.76275 7.89947L9.48512 9.08098C10.2014 7.99417 11.3257 7.76248 12.1536 7.76248C12.1631 7.76248 12.1727 7.76248 12.1822 7.76257C13.2134 7.76914 13.9915 8.06896 14.4951 8.65363C14.8616 9.07929 15.1067 9.66751 15.2281 10.4099C14.3139 10.2545 13.3251 10.2067 12.2681 10.2673C9.29059 10.4388 7.37639 12.1754 7.50495 14.5884C7.57019 15.8124 8.17996 16.8654 9.22188 17.5533C10.1028 18.1348 11.2374 18.4191 12.4165 18.3548C13.9738 18.2694 15.1954 17.6753 16.0476 16.5889C16.6949 15.7639 17.1042 14.6948 17.285 13.3476C18.0271 13.7955 18.5771 14.3849 18.8809 15.0934C19.3974 16.2978 19.4275 18.2769 17.8126 19.8904C16.3978 21.3039 14.697 21.9154 12.1267 21.9343C9.27552 21.9131 7.11922 20.9988 5.71726 19.2165C4.40444 17.5476 3.72596 15.1371 3.70065 12.0519C3.72596 8.96661 4.40444 6.55608 5.71726 4.88722C7.11922 3.10499 9.27549 2.19063 12.1266 2.16944C14.9985 2.19079 17.1924 3.10955 18.648 4.90038C19.3618 5.77858 19.8999 6.88298 20.2546 8.17067L22.273 7.63215C21.843 6.04715 21.1664 4.68134 20.2456 3.54863C18.3795 1.25272 15.6503 0.0762734 12.1337 0.0518799H12.1196C8.6102 0.0761886 5.91151 1.2571 4.09854 3.56179C2.48524 5.61268 1.65305 8.46634 1.62509 12.0434L1.625 12.0519L1.62509 12.0603C1.65305 15.6374 2.48524 18.4911 4.09854 20.542C5.91151 22.8466 8.6102 24.0276 12.1196 24.0519H12.1337C15.2538 24.0303 17.453 23.2134 19.2647 21.4033C21.6351 19.0351 21.5637 16.0668 20.7825 14.2445C20.222 12.9378 19.1534 11.8764 17.6921 11.1754ZM12.3051 16.2403C11.0001 16.3138 9.6443 15.728 9.57745 14.4734C9.5279 13.5431 10.2395 12.5051 12.3851 12.3815C12.6309 12.3673 12.872 12.3604 13.1089 12.3604C13.8883 12.3604 14.6174 12.4361 15.2802 12.581C15.033 15.6688 13.5828 16.1701 12.3051 16.2403Z"
                    fill="#9CA3AF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1508_285">
                    <rect width="24" height="24" fill="white" transform="translate(0 0.0518799)" />
                  </clipPath>
                </defs>
              </svg>
            </a>

            <a>
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.0352 13.1769L16.5273 9.9425H13.3984V7.83313C13.3984 6.91907 13.8203 6.07532 15.2266 6.07532H16.668V3.29797C16.668 3.29797 15.3672 3.05188 14.1367 3.05188C11.5703 3.05188 9.88281 4.63391 9.88281 7.44641V9.9425H7V13.1769H9.88281V21.0519H13.3984V13.1769H16.0352Z"
                  fill="#9CA3AF"
                />
              </svg>
            </a>

            <a>
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.34 5.51188C17.1027 5.51188 16.8707 5.58226 16.6733 5.71412C16.476 5.84597 16.3222 6.03339 16.2313 6.25266C16.1405 6.47193 16.1168 6.71321 16.1631 6.94599C16.2094 7.17877 16.3236 7.39259 16.4915 7.56041C16.6593 7.72823 16.8731 7.84252 17.1059 7.88882C17.3387 7.93512 17.5799 7.91136 17.7992 7.82054C18.0185 7.72971 18.2059 7.5759 18.3378 7.37856C18.4696 7.18123 18.54 6.94922 18.54 6.71188C18.54 6.39362 18.4136 6.0884 18.1885 5.86335C17.9635 5.63831 17.6583 5.51188 17.34 5.51188ZM21.94 7.93188C21.9206 7.10218 21.7652 6.28128 21.48 5.50188C21.2257 4.83501 20.83 4.23116 20.32 3.73188C19.8248 3.21931 19.2196 2.82606 18.55 2.58188C17.7727 2.28804 16.9508 2.12909 16.12 2.11188C15.06 2.05188 14.72 2.05188 12 2.05188C9.28 2.05188 8.94 2.05188 7.88 2.11188C7.04915 2.12909 6.22734 2.28804 5.45 2.58188C4.78168 2.82853 4.17693 3.22144 3.68 3.73188C3.16743 4.22706 2.77418 4.83232 2.53 5.50188C2.23616 6.27922 2.07721 7.10103 2.06 7.93188C2 8.99188 2 9.33188 2 12.0519C2 14.7719 2 15.1119 2.06 16.1719C2.07721 17.0027 2.23616 17.8245 2.53 18.6019C2.77418 19.2714 3.16743 19.8767 3.68 20.3719C4.17693 20.8823 4.78168 21.2752 5.45 21.5219C6.22734 21.8157 7.04915 21.9747 7.88 21.9919C8.94 22.0519 9.28 22.0519 12 22.0519C14.72 22.0519 15.06 22.0519 16.12 21.9919C16.9508 21.9747 17.7727 21.8157 18.55 21.5219C19.2196 21.2777 19.8248 20.8845 20.32 20.3719C20.8322 19.8745 21.2283 19.2701 21.48 18.6019C21.7652 17.8225 21.9206 17.0016 21.94 16.1719C21.94 15.1119 22 14.7719 22 12.0519C22 9.33188 22 8.99188 21.94 7.93188ZM20.14 16.0519C20.1327 16.6867 20.0178 17.3156 19.8 17.9119C19.6403 18.3471 19.3839 18.7403 19.05 19.0619C18.7256 19.3924 18.3332 19.6483 17.9 19.8119C17.3037 20.0296 16.6748 20.1446 16.04 20.1519C15.04 20.2019 14.67 20.2119 12.04 20.2119C9.41 20.2119 9.04 20.2119 8.04 20.1519C7.38089 20.1642 6.72459 20.0627 6.1 19.8519C5.68578 19.68 5.31136 19.4247 5 19.1019C4.66809 18.7806 4.41484 18.3871 4.26 17.9519C4.01586 17.347 3.88044 16.7038 3.86 16.0519C3.86 15.0519 3.8 14.6819 3.8 12.0519C3.8 9.42188 3.8 9.05188 3.86 8.05188C3.86448 7.40294 3.98295 6.75983 4.21 6.15188C4.38605 5.72979 4.65627 5.35354 5 5.05188C5.30381 4.70805 5.67929 4.43498 6.1 4.25188C6.70955 4.03192 7.352 3.91696 8 3.91188C9 3.91188 9.37 3.85188 12 3.85188C14.63 3.85188 15 3.85188 16 3.91188C16.6348 3.91916 17.2637 4.03413 17.86 4.25188C18.3144 4.42053 18.7223 4.69473 19.05 5.05188C19.3777 5.35906 19.6338 5.73461 19.8 6.15188C20.0223 6.76081 20.1373 7.40366 20.14 8.05188C20.19 9.05188 20.2 9.42188 20.2 12.0519C20.2 14.6819 20.19 15.0519 20.14 16.0519ZM12 6.92188C10.9858 6.92386 9.99496 7.22641 9.15265 7.7913C8.31035 8.35619 7.65438 9.15808 7.26763 10.0956C6.88089 11.0332 6.78072 12.0643 6.97979 13.0588C7.17886 14.0533 7.66824 14.9664 8.38608 15.6829C9.10392 16.3993 10.018 16.8869 11.0129 17.084C12.0077 17.2812 13.0387 17.179 13.9755 16.7904C14.9123 16.4018 15.7129 15.7443 16.2761 14.9009C16.8394 14.0575 17.14 13.0661 17.14 12.0519C17.1413 11.377 17.0092 10.7085 16.7512 10.0848C16.4933 9.46119 16.1146 8.89469 15.6369 8.41793C15.1592 7.94117 14.5919 7.56356 13.9678 7.30681C13.3436 7.05006 12.6749 6.91924 12 6.92188ZM12 15.3819C11.3414 15.3819 10.6976 15.1866 10.15 14.8207C9.60234 14.4548 9.17552 13.9347 8.92348 13.3262C8.67144 12.7177 8.6055 12.0482 8.73398 11.4022C8.86247 10.7563 9.17963 10.1629 9.64533 9.69721C10.111 9.23151 10.7044 8.91435 11.3503 8.78586C11.9963 8.65738 12.6659 8.72332 13.2743 8.97536C13.8828 9.2274 14.4029 9.65422 14.7688 10.2018C15.1347 10.7494 15.33 11.3933 15.33 12.0519C15.33 12.4892 15.2439 12.9222 15.0765 13.3262C14.9092 13.7302 14.6639 14.0973 14.3547 14.4065C14.0454 14.7158 13.6784 14.9611 13.2743 15.1284C12.8703 15.2957 12.4373 15.3819 12 15.3819Z"
                  fill="#9CA3AF"
                />
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default LandingPage;
