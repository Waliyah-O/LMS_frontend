import Accordion from '../../../components/accordion/Accordion';
import Hero from '../../../components/heroSection/Hero';
import { faqs } from './faqData';

const FAQpage = () => {
  return (
    <div>
      <Hero mainText={'Frequently Asked Questions'} />

      <section>
        <h3>Got Questions? Check Out Our FAQs</h3>
        <Accordion content={faqs} />
      </section>
    </div>
  );
};

export default FAQpage;
