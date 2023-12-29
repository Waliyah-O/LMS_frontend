import Accordion from '../../../components/accordion/Accordion';
import Hero from '../../../components/heroSection/Hero';
import SpotlightProduct from '../../../components/spotlightProduct/SpotlightProduct';
import { faqs } from './faqData';

const FAQpage = () => {
  return (
    <div>
      <Hero mainText={`Frequently Asked\nQuestions`} />

      <section>
        <h3>Got Questions? Check Out Our FAQs</h3>
        <Accordion content={faqs} />
      </section>
      <SpotlightProduct />
    </div>
  );
};

export default FAQpage;
