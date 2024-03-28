import React from "react";

import { community } from "../data";

import CommunitySlider from "./CommunitySlider";

const Community = () => {
  const { icon, title, testimonials } = community;
  return (
    <section className="section relative">
      <div className="container mx-auto">
        <div className="flex">
          <div className=" section-title-group max-w-[240px] px-4 lg:px-0 lg:ml-0 mx-auto">
            <img src={icon} alt="" />
            <h2 className="h2 section-title">
              {title} <span className="text-primary-200">.</span>
            </h2>
          </div>
          <div>
            <CommunitySlider testimonials={testimonials}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
