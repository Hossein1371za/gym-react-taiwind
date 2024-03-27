import React, { useState } from "react";

import { BsCheckCircleFill } from "react-icons/bs";

const PlanList = ({ plans }) => {
  const [index, setIndex] = useState(0);
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center max-w-[1280px] mx-auto gap-y-4">
      {plans.map((plan, idx) => {
        const { name, price, list, delay } = plan;
        return (
          <div
            onClick={()=>setIndex(idx)}
            key={idx}
            className="w-full md:max-w-[620px] lg:max-w-[405px] rounded-sm px-4 lg:min-h-[550px]"
          >
            <div
              className={`${
                idx === index
                  ? "bg-neutral-500 text-white"
                  : "bg-neutral-400/10 text-neutral-500"
              }`}
            >
                {/* name and pricing */}
              <div>
              <div>{name}</div>
                <div>
                  <div>
                    <span>{price}</span>
                    <span>$</span>
                  </div>
                  <span>/month</span>
                </div>
              </div>
              {/* list and button*/}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlanList;
