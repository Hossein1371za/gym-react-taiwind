import React from "react";

import { faq } from "../data";
import Accordion from "./Accordion";

const Faq = () => {
  const { icon, title, accordions } = faq;

  return (
    <section className="section pt-[480px] lg:pt-[280px]">
      <div className="max-w-[768px] mx-auto lg:bg-faq bg-no-repeat bg-custom bg-center lg:h-[1160px] lg:pt-6">
        <div className="section-title-group justify-start lg:justify-center -space-x-4 lg:max-w-[540px] mx-auto px-4 lg:px-0">
          <img className="lg:hidden" src={icon} alt="" />
          <h2 className="h2 section-title lg:mt-[100px]">
            {title} <span className="text-primary-200">.</span>
          </h2>
        </div>
        <div>
          {accordions.map((accordion, idx) => {
            return <Accordion accordion={accordion} key={idx} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
