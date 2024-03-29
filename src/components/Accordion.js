import React, { useState } from "react";

import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";

const Accordion = ({ accordion }) => {
  const { question, answer } = accordion;
  const [open, setOpen] = useState(false);

  return (
    <div onClick={() => setOpen(!open)} className="cursor-pointer">
      <div className="bg-white border rounded-sm">
        <div className="min-h-[60px] flex items-center justify-between px-[30px]">
          <h6 className="h6">{question}</h6>
          <div className="transition text-[20px] text-neutral-500">
            {open ? <FaChevronCircleUp /> : <FaChevronCircleDown />}
          </div>
        </div>
        <div
          className={`${
            open ? "min-h-[200px] lg:min-h-[160px]" : "min-h-0"
          } max-h-0 overflow-hidden flex justify-center transition-all px-[30px]`}
        >
          <div className="mt-6">{answer}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
