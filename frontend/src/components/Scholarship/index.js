import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
const Schoolarship = () => {
  return (
    <div
      className="container-scholarship-and-other"
      id="country-scholarship-container"
      style={{ gridTemplateColumns: "220px 1fr 1fr" }}
    >
      <div
        className="row-scholarship-and-other title-scholarship-and-other"
        style={{ gridRowEnd: 2 }}
      >
        <h2>Học bổng &amp; Hỗ trợ tài chính</h2>
        <pre className="pre-content">
          <p>
            Nhanh tay săn ngay học bổng du học Canada hấp dẫn đến 120.000 CAD
            (~2,2 tỷ). Nhận hỗ trợ, ưu đãi và quà tặng độc đáo khác từ INEC.
          </p>
        </pre>
        <button
          className="button-scholarship-and-other apply-scholarship-scholarship-and-other btn-rainbow-border popmake-70234 pum-trigger"
          style={{ cursor: "pointer" }}
        >
          <span>Apply học bổng</span>
        </button>
      </div>
      <div className="row-scholarship-and-other nav-scholarship-item show">
        <div className="accordion" rel="1">
          <div className="accordion-item">
            <Link to="#" className="accordion-title plain active">
              {/* <image
                          src="http://localhost:1988/uploads/icon-inec-2024.png"
                          alt
                        /> */}
              <span>Cập nhật mới nhất 2025</span>
            </Link>
            <div className="accordion-inner" style={{ display: "block" }}>
              <span className="sub-text-accordion">
                *Áp dụng có điều kiện tuỳ chương trình
              </span>
              <div className="contents-scholarship-and-other">
                <Link
                  href="https://duhocinec.com/hoc-bong-du-hoc-canada-danh-sach-dieu-kien-moi-nhat/"
                  className="show"
                >
                  <h5>
                    Danh sách học bổng du học Canada năm 2025 đến 70%
                    <hr className="devider-scholarship-and-other" />
                  </h5>
                </Link>
                <a
                  href="https://duhocinec.com/dai-hoc-ontario-tech-cap-hoc-bong-tien-ty/"
                  className="show"
                >
                  <h5>
                    Ontario Tech: Trường "đỉnh" - Học bổng kịch trần đến 120.000
                    CAD
                    <hr className="devider-scholarship-and-other" />
                  </h5>
                </a>
                <a
                  href="https://duhocinec.com/hoc-bong-langara-college-vancouver/"
                  className="show"
                >
                  <h5>
                    Mở khóa học bổng 7.500 CAD của Langara College, Vancouver
                    <hr className="devider-scholarship-and-other" />
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row-scholarship-and-other nav-scholarship-item show">
        <div className="accordion" rel="1">
          <div className="accordion-item">
            <Link to="#" className="accordion-title plain active">
              <button className="toggle" aria-label="Toggle">
                <i className="icon-angle-down"></i>
              </button>
              <span>Hỗ trợ và ưu đãi độc quyền từ INEC</span>
            </Link>
            <div className="accordion-inner" style={{ display: "block" }}>
              <span className="sub-text-accordion">
                *Áp dụng có điều kiện tuỳ chương trình
              </span>
              <div className="contents-scholarship-and-other">
                <span className="show">
                  <h5 style={{ color: "#fff" }}>
                    Tặng phí ghi danh
                    <hr className="devider-scholarship-and-other" />
                  </h5>
                </span>
                <span className="show">
                  <h5 style={{ color: "#fff" }}>
                    Tặng phí dịch thuật hồ sơ
                    <hr className="devider-scholarship-and-other" />
                  </h5>
                </span>
                <span className="show">
                  <h5 style={{ color: "#fff" }}>
                    Tặng phí khám sức khỏe
                    <hr className="devider-scholarship-and-other" />
                  </h5>
                </span>
                <span className="show">
                  <h5 style={{ color: "#fff" }}>
                    Tặng phí xin visa
                    <hr className="devider-scholarship-and-other" />
                  </h5>
                </span>
                <span className="show">
                  <h5 style={{ color: "#fff" }}>
                    Miễn phí tư vấn, định hướng nghề nghiệp
                    <hr className="devider-scholarship-and-other" />
                  </h5>
                </span>
                <span className="hide" data-initial-hide="true">
                  <h5 style={{ color: "#fff" }}>
                    Hỗ trợ xin thư mời học
                    <hr className="devider-scholarship-and-other" />
                  </h5>
                </span>
                <span className="hide" data-initial-hide="true">
                  <h5 style={{ color: "#fff" }}>
                    Hướng dẫn chứng minh tài chính, xin visa
                    <hr className="devider-scholarship-and-other" />
                  </h5>
                </span>
                <span className="hide" data-initial-hide="true">
                  <h5 style={{ color: "#fff" }}>
                    Kết nối với mạng lưới du học sinh INEC ở Canada
                    <hr className="devider-scholarship-and-other" />
                  </h5>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="btn-showmore-scholarship"
        className="button-scholarship-and-other more-info-scholarship-and-other"
        style={{
          gridColumnStart: "1",
          gridColumnEnd: "5",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        <span style={{ fontWeight: "700" }}>Xem thêm</span>
      </div>
    </div>
  );
};

export default Schoolarship;
