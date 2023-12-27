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
    <div>
      {content.map((item) => (
        <div key={item.id} className="collapse collapse-arrow bg-base-200 my-3 mx-auto w-4/5">
          <input
            type="radio"
            name="my-accordion-2"
            checked={openAccordions[item.id]}
            onChange={() => handleToggleAccordion(item.id)}
          />
          <div className="collapse-title text-lg font-medium">{item.question}</div>
          <div className={`collapse-content ${openAccordions[item.id] ? 'open' : ''}`}>
            <p>{item.response}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
