import React from "react";
import ChartIcon from "../../static/icons/chart.svg";
import DataMigrateIcon from "../../static/icons/data-migrate.svg";
import RobotChartIcon from "../../static/icons/robot-chart.svg";

export const Challenges = () => {
  return (
    <section className="challenge">
      <div className="challenge__title">Thách thức trong Trade Marketing</div>
      <div className="challenge__list">
        <div className="challenge__item">
          <div className="challenge__item-icon-container">
            <img src={ChartIcon} alt="" className="challenge__item-icon" />
          </div>
          <div className="challenge__item-details">
            <div className="challenge__item-details-title">
              Báo cáo PG/Activation
            </div>
            <div className="challenge__item-details-description">
              Báo cáo PG/Activation thủ công, thiếu tin cậy
            </div>
          </div>
        </div>
        <div className="challenge__list-divider"></div>
        <div className="challenge__item">
          <div className="challenge__item-icon-container">
            <img
              src={DataMigrateIcon}
              alt=""
              className="challenge__item-icon"
            />
          </div>
          <div className="challenge__item-details">
            <div className="challenge__item-details-title">
              Bài toán ROI & Dữ liệu
            </div>
            <div className="challenge__item-details-description">
              Brand & Agency khó chứng minh ROI, dễ mất dữ liệu
            </div>
          </div>
        </div>
        <div className="challenge__list-divider"></div>
        <div className="challenge__item">
          <div className="challenge__item-icon-container">
            <img src={RobotChartIcon} alt="" className="challenge__item-icon" />
          </div>
          <div className="challenge__item-details">
            <div className="challenge__item-details-title">
              Thiếu real-time tracking
            </div>
            <div className="challenge__item-details-description">
              Khó theo dõi hiệu quả trade marketing theo thời gian thực
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
