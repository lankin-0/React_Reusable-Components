import { useState } from "react";
//ICONS
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordion = ({ items }) => {
  //STATE
  const [expandedIndex, setExpandedIndex] = useState(-1);

  //HANDLERS
  const handleClick = (index) => {
    setExpandedIndex((currentExpanded) => {
      if (currentExpanded === index) {
        return -1;
      } else {
        return index;
      }
    });
  };

  //MAP
  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-stone-800 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  //RENDER
  return <div className="border-x border-t rounded">{renderedItems}</div>;
};

export default Accordion;
