import Hero from '../../../components/heroSection/Hero';
import ListComponent from '../../../components/listComponent/ListComponent';
import imgOne from '../../../assets/images/benefitsImgOne.png';
import imgTwo from '../../../assets/images/benefitsImgTwo.png';
import { listContent, listContentTwo } from './orgData';

const OrganizationBenefits = () => {
  return (
    <div>
      <Hero mainText={`Leveraging Seamless Employee\nTraining Adherence`} isButton={true} />

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
