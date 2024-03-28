import React from "react";

import { faq } from "../data";

const Faq = () => {
  const { icon, title, accordion } = faq;

  return (
    <section className="section pt-[480px] lg:pt-[280px]">
      <div className="container mx-auto">
        <div>
          <div>
            <img className="lg:hidden" src={icon} alt="" />
            <h2 className="h2 section-title lg:mt-[100px]">
              {title} <span className="text-primary-200">.</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
