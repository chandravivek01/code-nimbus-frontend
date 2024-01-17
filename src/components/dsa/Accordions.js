import { useState } from "react";

import AccordionItem from "./AccordionItem";

const Accordions = ({ items }) => {

    const [openIndex, setOpenIndex] = useState(null);
  
    const handleAccordionClick = (index) => {
      setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="accordion">
        {
          items.map( (item, index) => (
            <AccordionItem
                  key={index}
                  item={item}
                  index={index}
                  isOpen={openIndex === index}
                  handleClick={handleAccordionClick}
            />
            )
          )
        }
      </div>
    );
  };
  
  export default Accordions;