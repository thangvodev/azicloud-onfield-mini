import React from "react";
import CTABannerImg from "../../static/images/cta-bg.png";
import PhoneIcon from "../../static/icons/phone.svg";

export const CTABanner = () => {
  return (
    <section className="cta">
      <img src={CTABannerImg} alt="" className="cta__bg" />
      <div className="cta__title">
        Biến mọi <span className="cta__title--colors">Activation</span> thành
        chiến dịch thành công ngay hôm nay!
      </div>
      <div className="cta__buttons">
        <button className="cta__button-call">
          <div className="cta__button-label" style={{ color: "#46a3ed" }}>
            Liên hệ ngay
          </div>
          <img src={PhoneIcon} alt="" className="cta__button-icon" />
        </button>
        <button className="cta__button-subscribe" style={{ color: "#FFFFFF" }}>
          Đăng ký demo
        </button>
      </div>
    </section>
  );
};
