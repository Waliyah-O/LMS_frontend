import { useState } from 'react';

const Accordion = ({ content }) => {
  const [openAccordions, setOpenAccordions] = useState({});

  const handleToggleAccordion = (id) => {
    setOpenAccordions((prevOpenAccordions) => ({
      ...Object.keys(prevOpenAccordions).reduce((acc, accordionId) => {
        acc[accordionId] = accordionId === id ? !prevOpenAccordions[accordionId] : false;
        return acc;
      }, {}),
    }));
  };

  return (
    <div className="font-inter">
      {content.map((item) => (
        <div key={item.id} className="collapse collapse-arrow border rounded-sm bg-base-200 my-0 mx-auto w-5/6">
          <input
            type="radio"
            name="my-accordion-2"
            checked={openAccordions[item.id]}
            onChange={() => handleToggleAccordion(item.id)}
          />
          <div className="collapse-title text-md md:text-lg text-gray-900 font-medium">{item.question}</div>
          <div className={`bg-white collapse-content ${openAccordions[item.id] ? 'open' : ''}`}>
            <p className="p-1 text-gray-500">{item.response}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
