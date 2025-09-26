import React from "react";
import { Banner } from "./banner";
import { Challenges } from "./challenges";
import { Features } from "./features";
import { Procedure } from "./procedure";
import { CTABanner } from "./cta-banner";
import { SubscribeFloatButton } from "./subscribe-float-button";

const Content = () => {
  return (
    <div className="relative flex flex-col items-center gap-[40px] pb-[89px]">
      <Banner />
      <Challenges />
      <Features />
      <Procedure />
      <CTABanner />
      <SubscribeFloatButton />
    </div>
  );
};

export default Content;
