import React from "react";
import CheckFillIcon from "../../static/icons/check-fill.svg";
import Feature1 from "../../static/images/feature-1.png";
import Feature2 from "../../static/images/feature-2.png";
import Feature3 from "../../static/images/feature-3.png";
import Feature4 from "../../static/images/feature-4.png";

export const Features = () => {
  return (
    <section className="feature">
      <div className="feature__title">Tính năng nổi bật</div>
      <div className="feature__list">
        <div className="feature__list-item">
          <div className="feature__item-content">
            <div className="feature__content-title">
              Activation -
              <span className="feature__content-title--highlight">
                Tăng trải nghiệm khách hàng
              </span>
            </div>
            <div className="feature__content">
              <div className="feature__content-line">
                <img
                  src={CheckFillIcon}
                  alt=""
                  className="feature__line-icon"
                />
                <div className="feature__line-text">
                  <div className="feature__line-text--heading">Sampling</div>
                  <div className="feature__line-text--description">
                    Phát thử sản phẩm có kiểm soát
                  </div>
                </div>
              </div>
              <div className="feature__content-line">
                <img
                  src={CheckFillIcon}
                  alt=""
                  className="feature__line-icon"
                />
                <div className="feature__line-text">
                  <div className="feature__line-text--heading">Selling</div>
                  <div className="feature__line-text--description">
                    Bán hàng tại booth, khuyến mãi tự động
                  </div>
                </div>
              </div>
              <div className="feature__content-line">
                <img
                  src={CheckFillIcon}
                  alt=""
                  className="feature__line-icon"
                />
                <div className="feature__line-text">
                  <div className="feature__line-text--heading">Survey</div>
                  <div className="feature__line-text--description">
                    Khảo sát nhanh, lấy insight trực tiếp
                  </div>
                </div>
              </div>
              <div className="feature__content-line">
                <img
                  src={CheckFillIcon}
                  alt=""
                  className="feature__line-icon"
                />
                <div className="feature__line-text">
                  <div className="feature__line-text--heading">Lucky Wheel</div>
                  <div className="feature__line-text--description">
                    Vòng quay trúng thưởng, quản lý ngân sách
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src={Feature1} alt="" className="feature__list-item-image" />
        </div>
        <div className="feature__list-item--reversed">
          <div className="feature__item-content">
            <div className="feature__content-title">
              Vận hành -
              <span className="feature__content-title--highlight">
                Quản lý nhân sự & kho
              </span>
            </div>
            <div className="feature__content">
              <div className="feature__content-line">
                <img
                  src={CheckFillIcon}
                  alt=""
                  className="feature__line-icon"
                />
                <div className="feature__line-text">
                  <div className="feature__line-text--heading">
                    PG Attendance
                  </div>
                  <div className="feature__line-text--description">
                    Check-in GPS + selfie, theo dõi KPI realtime
                  </div>
                </div>
              </div>
              <div className="feature__content-line">
                <img
                  src={CheckFillIcon}
                  alt=""
                  className="feature__line-icon"
                />
                <div className="feature__line-text">
                  <div className="feature__line-text--heading">Inventory</div>
                  <div className="feature__line-text--description">
                    Quản lý hàng mẫu/quà tặng, tự động trừ kho khi phát/bán
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src={Feature2} alt="" className="feature__list-item-image" />
        </div>
        <div className="feature__list-item">
          <div className="feature__item-content">
            <div className="feature__content-title">
              Giám sát -
              <span className="feature__content-title--highlight">
                Audit & kiểm tra điểm bán
              </span>
            </div>
            <div className="feature__content">
              <div className="feature__content-line">
                <img
                  src={CheckFillIcon}
                  alt=""
                  className="feature__line-icon"
                />
                <div className="feature__line-text">
                  <div className="feature__line-text--heading">Sitecheck</div>
                  <div className="feature__line-text--description">
                    Chấm điểm POSM, setup booth đúng guideline
                  </div>
                </div>
              </div>
              <div className="feature__content-line">
                <img
                  src={CheckFillIcon}
                  alt=""
                  className="feature__line-icon"
                />
                <div className="feature__line-text">
                  <div className="feature__line-text--heading">
                    Display Audit
                  </div>
                  <div className="feature__line-text--description">
                    Kiểm tra trưng bày, tính shelf share
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src={Feature3} alt="" className="feature__list-item-image" />
        </div>
        <div className="feature__list-item--reversed">
          <div className="feature__item-content">
            <div className="feature__content-title">
              Insight -
              <span className="feature__content-title--highlight">
                Dữ liệu & quyết định
              </span>
            </div>
            <div className="feature__content">
              <div className="feature__content-line">
                <img
                  src={CheckFillIcon}
                  alt=""
                  className="feature__line-icon"
                />
                <div className="feature__line-text">
                  <div className="feature__line-text--heading">Dashboard</div>
                  <div className="feature__line-text--description">
                    Gom toàn bộ dữ liệu từ các module
                  </div>
                </div>
              </div>
              <div className="feature__content-line">
                <img
                  src={CheckFillIcon}
                  alt=""
                  className="feature__line-icon"
                />
                <div className="feature__line-text">
                  <div className="feature__line-text--heading">
                    Data Insight
                  </div>
                  <div className="feature__line-text--description">
                    Báo cáo realtime, đo ROI tức thì
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src={Feature4} alt="" className="feature__list-item-image" />
        </div>
      </div>
    </section>
  );
};
