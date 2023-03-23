import { useState, useEffect, useRef } from "react";
//ICONS
import { GoChevronDown } from "react-icons/go";
//COMPONENTS
import Panel from "./Panel";

const Dropdown = ({ options, value, onChange }) => {
  //OPEN-CLOSE STATE
  const [isOpen, setIsOpen] = useState(false);

  //REF
  const divEl = useRef();

  //EFFECTS
  useEffect(() => {
    const handler = (event) => {
      //If divEl dont exist return
      if (!divEl.current) {
        return;
      }

      //if divEl its not equal with the clicked element close the dropdown
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    //true = I Phase of event handlers Capture
    document.addEventListener("click", handler, true);

    //Clean Up Event handler
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  //DROPDOWN OPEN-CLOSE
  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  //SELECT OPTION
  const handleOptionClick = (option) => {
    //OPTION SELECT
    onChange(option);
    //CLOSE THE MENU
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  //MAP TROUGH AND RENDER OPTIONS
  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-stone-700 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  //value?.label = check if value is null or undefined
  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <GoChevronDown />
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full ">{renderedOptions}</Panel>
      )}
    </div>
  );
};

export default Dropdown;
