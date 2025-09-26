import React from "react";
import ProcedureBgImg from "../../static/images/procedure-bg-mobile.svg";
import Procedure1 from "../../static/icons/procedure-1.svg";
import Procedure2 from "../../static/icons/procedure-2.svg";
import Procedure3 from "../../static/icons/procedure-3.svg";
import Procedure4 from "../../static/icons/procedure-4.svg";

export const Procedure = () => {
  return (
    <section className="procedure">
      <div className="procedure__title">Quy trình vận hành</div>
      <div className="procedure__details">
        <img src={ProcedureBgImg} alt="" className="procedure__details-bg" />
        <div className="procedure__card">
          <div
            className="procedure__card-icon-container"
            style={{ background: "#f1f8ff" }}
          >
            <img src={Procedure1} alt="" className="procedure__card-icon" />
          </div>
          <div className="procedure__card-content">
            <div className="procedure__content-title">PG</div>
            <div className="procedure__content-description">
              Check-in & nhập dữ liệu tiếp cận khách hàng
            </div>
          </div>
        </div>
        <div className="procedure__card">
          <div
            className="procedure__card-icon-container"
            style={{ background: "#fcf4ed" }}
          >
            <img src={Procedure2} alt="" className="procedure__card-icon" />
          </div>
          <div className="procedure__card-content">
            <div className="procedure__content-title">Khách hàng</div>
            <div className="procedure__content-description">
              Tham gia activation (scan QR, chơi game, nhận quà)
            </div>
          </div>
        </div>
        <div className="procedure__card">
          <div
            className="procedure__card-icon-container"
            style={{ background: "#f0faf0" }}
          >
            <img src={Procedure3} alt="" className="procedure__card-icon" />
          </div>
          <div className="procedure__card-content">
            <div className="procedure__content-title">Manager</div>
            <div className="procedure__content-description">
              Giám sát realtime qua dashboard
            </div>
          </div>
        </div>
        <div className="procedure__card">
          <div
            className="procedure__card-icon-container"
            style={{ background: "#fef9eb" }}
          >
            <img src={Procedure4} alt="" className="procedure__card-icon" />
          </div>
          <div className="procedure__card-content">
            <div className="procedure__content-title">Brand/Agency</div>
            <div className="procedure__content-description">
              Theo dõi báo cáo & đo ROI tức thì
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
