import Hero from '../../components/heroSection/Hero';
import ListComponent from '../../components/listComponent/ListComponent';
import imgOne from '../../assets/images/whyPageImgOne.png';
import imgTwo from '../../assets/images/whyPageImgTwo.png';

const WhyPage = () => {
  const listContent = [
    {
      id: 1,
      element: 'Provide an accessible and user-friendly LMS that empowers everyone to learn and grow.',
    },
    {
      id: 2,
      element: 'Empower organizations to deliver high-quality, engaging learning experience',
    },
    {
      id: 3,
      element: 'Make learning accessible to everyone, anytime, anywhere.',
    },
    {
      id: 4,
      element:
        'Provide organizations with the tools and resources they need to measure and track the success of their training programs.',
    },
    {
      id: 5,
      element: 'Help organizations achieve their business goals through effective training and development.',
    },
  ];

  return (
    <div>
      <Hero mainText={'Empowering Young Africans with Essential Tech Skills for Lucrative Careers'} isButton={true} />

      <section>
        <ListComponent
          bg={'bg-white'}
          src={imgOne}
          flexDirection={'flex-row'}
          listItems={false}
          headerText={'iALMS Redefines Learning with Robust Features for All'}
          bodyTextOne={
            'iALMS is designed to be user-friendly and accessible to everyone, regardless of their technical expertise. We offer a wide range of features to support all aspects of the learning process, from course creation and delivery to assessment and reporting.'
          }
          bodyTextTwo={
            'We believe that everyone has the potential to learn and grow, and we are committed to providing the tools and resources that make it possible. We are constantly working to improve our LMS and develop new features that meet the needs of our customers. We are committed to providing a world-class learning experience that helps everyone reach their full potential.'
          }
          isButton={false}
        />
      </section>

      <section>
        <ListComponent
          bg={'bg-white'}
          src={imgTwo}
          headerText={'Excellence in Learning with Cutting-Edge Goals.'}
          listItems={listContent}
          flexDirection={'flex-row-reverse'}
          isButton={true}
        />
      </section>
    </div>
  );
};

export default WhyPage;
