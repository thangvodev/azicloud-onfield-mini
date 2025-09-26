import React from "react";
import CTABannerImg from "../../static/images/cta-bg.png";

export const CTABanner = () => {
  return (
    <section className="cta">
      <img src={CTABannerImg} alt="" className="cta__bg" />
      <div className="cta__title">
        Biến mọi <span className="cta__title--colors">Activation</span> thành
        chiến dịch thành công ngay hôm nay!
      </div>
    </section>
  );
};
