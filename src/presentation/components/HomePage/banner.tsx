import React from "react";
import BannerImg from "../../static/images/banner-mobile.png";

export const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__top">
        <div className="banner__header-text-container">
          <div className="banner__header-title">
            Trade
            <span className="banner__header-title--colors"> Marketing </span>
            Platform
          </div>
          <div className="banner__header-description">
            Quản lý Activation & On-field minh bạch, realtime và hiệu quả.
          </div>
        </div>
      </div>
      <img src={BannerImg} alt="" className="banner__banner-image" />
    </section>
  );
};
