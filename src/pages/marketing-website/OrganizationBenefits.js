import Hero from '../../components/heroSection/Hero';
import ListComponent from '../../components/listComponent/ListComponent';
import imgOne from '../../assets/images/benefitsImgOne.png';
import imgTwo from '../../assets/images/benefitsImgTwo.png';

const OrganizationBenefits = () => {
  const listContent = [
    {
      id: 1,
      element:
        'Reduced training costs: By delivering training electronically, organizations can save money on travel, printing, and other associated costs.',
    },
    {
      id: 2,
      element:
        'Increased employee productivity: Employees who have access to relevant and up-to-date training are more productive and engaged.',
    },
    {
      id: 3,
      element:
        'Improved employee morale: Employees who feel that they are being developed and invested in are more likely to be satisfied and loyal.',
    },
    {
      id: 4,
      element:
        'Enhanced compliance: LMS can help organizations ensure that employees are compliant with all required training mandates.',
    },
    {
      id: 5,
      element:
        'Improved decision-making: LMS provides organizations with valuable data on employee training progress and performance, which can help them make informed decisions about their training programs.',
    },
  ];

  const listContentTwo = [
    {
      id: 1,
      element: 'Increase the adoption of our LMS by educators and organizations.',
    },
    {
      id: 2,
      element: 'Improve the quality and effectiveness of online learning.',
    },
    {
      id: 3,
      element: 'Make learning more accessible and affordable for everyone.',
    },
    {
      id: 4,
      element: 'We believe that our LMS can play a vital role in improving the lives of people around the world.',
    },
    {
      id: 5,
      element: 'We are committed to working with our customers to make learning a lifelong journey for everyone.',
    },
    {
      id: 6,
      element:
        'Provide a comprehensive suite of learning management tools, including course creation, delivery, assessment, and reporting.',
    },
    {
      id: 7,
      element: 'Provide exceptional customer support to help organizations get the most out of their LMS.',
    },
  ];

  return (
    <div>
      <Hero mainText={'Leveraging  Seamless Employee Training Adherence'} isButton={true} />

      <section>
        <ListComponent
          headerText={'Maximising Compliance in Organisations.'}
          src={imgOne}
          flexDirection={'flex-row'}
          listItems={listContent}
        />
      </section>

      <section>
        <ListComponent
          headerText={'Empower Organizations to Meet Training Mandates with Ease'}
          src={imgTwo}
          flexDirection={'flex-row-reverse'}
          listItems={listContentTwo}
          isButton={true}
        />
      </section>
    </div>
  );
};

export default OrganizationBenefits;
