import Accordion from '../../../components/accordion/Accordion';
import Hero from '../../../components/heroSection/Hero';
import SpotlightProduct from '../../../components/spotlightProduct/SpotlightProduct';
import { faqs } from './faqData';

const FAQpage = () => {
  return (
    <div>
      <Hero mainText={`Frequently Asked\nQuestions`} />
      <section className="flex flex-col items-center justify-evenly h-full">
        <h1 className="font-inter font-extrabold text-lg-heading">Got Questions? Check Out Our FAQs</h1>
        <div className="divider w-4/5 m-auto"></div>
        <Accordion content={faqs} />
      </section>
      <SpotlightProduct />
    </div>
  );
};

export default FAQpage;
