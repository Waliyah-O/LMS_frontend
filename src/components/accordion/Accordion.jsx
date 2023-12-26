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
    <div className="flex flex-col items-center justify-center gap-2">
      {content.map((item) => (
        <div key={item.id} className="collapse collapse-arrow bg-base-200 sm:w-3/4">
          <input
            type="radio"
            name="my-accordion-2"
            checked={openAccordions[item.id]}
            onChange={() => handleToggleAccordion(item.id)}
          />
          <div className="collapse-title text-lg sm:text-xl font-medium p-0 sm:p-0">{item.question}</div>
          <div className={`collapse-content text-sm sm:text-base p-4 sm:p-6 ${openAccordions[item.id] ? 'open' : ''}`}>
            <p>{item.response}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
