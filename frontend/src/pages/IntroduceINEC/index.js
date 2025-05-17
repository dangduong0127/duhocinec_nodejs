import React from "react";
import "./styles.scss";
import WhatOurClientsSay from "../HomePage/WhatOurClientsSay";
import TitleBradingLine from "../HomePage/Title&BrandingLine";
const IntroduceINEC = () => {
  return (
    <div className="Introduce-wrapper">
      <section className="fist-section">
        <div className="container">
          <div className="col-sec">
            <img
              src="https://duhocinec.com/wp-content/uploads/2024/11/note-icon.png"
              alt=""
            />
          </div>
          <div className="col-sec">
            <h1>Du học INEC - Chúng tôi là ai?</h1>
            <p className="txt-italic">
              Tại INEC, chúng tôi tin rằng mỗi cá nhân có thể được thúc đẩy sự
              phát triển tư duy, tầm nhìn, góp phần xây dựng sự nghiệp thành
              công, cho tương lai tốt đẹp hơn thông qua con đường du học. Chúng
              tôi kiên định với sứ mệnh làm cầu nối giáo dục trong suốt hơn 18
              năm.
            </p>
            <p className="txtFouder">Fouder & CEO Kiểu Ngọc Hương</p>
          </div>
        </div>
      </section>

      <section className="second-section">
        <div className="container">
          <div className="values-container">
            <div className="row">
              {/* Col 1 */}
              <div className="col">
                <div className="col-inner dark">
                  <div className="section-title-container">
                    <h2 className="section-title">
                      <span className="section-title-main">
                        Giá trị INEC hướng đến
                      </span>
                    </h2>
                  </div>

                  <div className="icon-box featured-box">
                    <div className="icon-box-img">
                      <img
                        src="https://duhocinec.com/wp-content/uploads/2024/11/icon-INEC-w-I.png"
                        alt="Integrity"
                      />
                    </div>
                    <div className="icon-box-text">
                      <p>
                        <strong>Integrity – Chính trực</strong> : Nói là làm và
                        làm hơn cả những gì đã nói, INEC thực hiện đúng các cam
                        kết với khách hàng.
                      </p>
                    </div>
                  </div>

                  <div className="icon-box featured-box">
                    <div className="icon-box-img">
                      <img
                        src="https://duhocinec.com/wp-content/uploads/2024/11/icon-INEC-w-N.png"
                        alt="Network"
                      />
                    </div>
                    <div className="icon-box-text">
                      <p>
                        <strong>Network – Kết nối</strong> : INEC kết nối bạn
                        với mạng lưới du học sinh và trường đối tác ở 16 quốc
                        gia để hỗ trợ cho bạn khi cần.
                      </p>
                    </div>
                  </div>

                  <div className="icon-box featured-box">
                    <div className="icon-box-img">
                      <img
                        src="https://duhocinec.com/wp-content/uploads/2024/11/icon-INEC-w-E.png"
                        alt="Ethicality"
                      />
                    </div>
                    <div className="icon-box-text">
                      <p>
                        <strong>Ethicality – Đạo đức</strong> : Ưu tiên lợi ích
                        khách hàng, INEC giúp bạn lựa chọn lộ trình du học phù
                        hợp, tiết kiệm, hiệu quả.
                      </p>
                    </div>
                  </div>

                  <div className="icon-box featured-box">
                    <div className="icon-box-img">
                      <img
                        src="https://duhocinec.com/wp-content/uploads/2024/11/icon-INEC-w-C.png"
                        alt="Caring"
                      />
                    </div>
                    <div className="icon-box-text">
                      <p>
                        <strong>Caring – Chăm sóc</strong> : Các hỗ trợ INEC
                        dành cho bạn xuyên suốt từ lúc lên kế hoạch đến khi hoàn
                        tất chương trình du học.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Col 2 (Video) */}
              <div className="col">
                <div className="col-inner dark">
                  <div className="video">
                    <iframe
                      title="INEC qua cảm nhận của khách hàng"
                      src="https://www.youtube.com/embed/5ELD6hku_Bg?feature=oembed"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="thrid-section">
        <div className="thrid-wrapper">
          <div className="title">
            <h2>Những con số ấn tượng về INEC</h2>
          </div>

          <div className="thrid-container">
            <div className="thrid-container-item">
              <div className="thrid-image">
                <img
                  src="https://duhocinec.com/wp-content/uploads/2024/11/18-year-anniversary-01-400x400.png"
                  alt=""
                />
              </div>
              <div className="thrid-content">
                <strong>18</strong>
                <p>Năm hoạt động</p>
              </div>
            </div>

            <div className="thrid-container-item">
              <div className="thrid-image">
                <img
                  src="https://duhocinec.com/wp-content/uploads/2024/11/cac-con-so-inec-500.png"
                  alt=""
                />
              </div>
              <div className="thrid-content">
                <strong>500+</strong>
                <p>Trường đối tác tuyển sinh</p>
              </div>
            </div>

            <div className="thrid-container-item">
              <div className="thrid-image">
                <img
                  src="https://duhocinec.com/wp-content/uploads/2024/11/cac-con-so-inec-tuyen-sinh-toan-cau.png"
                  alt=""
                />
              </div>
              <div className="thrid-content">
                <strong>20+</strong>
                <p>Quốc gia tuyển sinh</p>
              </div>
            </div>

            <div className="thrid-container-item">
              <div className="thrid-image">
                <img
                  src="https://duhocinec.com/wp-content/uploads/2024/11/cac-con-so-inec-10000-sv.png"
                  alt=""
                />
              </div>
              <div className="thrid-content">
                <strong>10.000+</strong>
                <p>Sinh viên du học</p>
              </div>
            </div>

            <div className="thrid-container-item">
              <div className="thrid-image">
                <img
                  src="https://duhocinec.com/wp-content/uploads/2024/11/cac-con-so-inec-63-tinh.png"
                  alt=""
                />
              </div>
              <div className="thrid-content">
                <strong>63</strong>
                <p>Tỉnh thành INEC tuyển sinh</p>
              </div>
            </div>

            <div className="thrid-container-item">
              <div className="thrid-image">
                <img
                  src="https://duhocinec.com/wp-content/uploads/2024/11/experiencelife-300x300.png"
                  alt=""
                />
              </div>
              <div className="thrid-content">
                <strong>95%</strong>
                <p>Khách hàng hài lòng</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatOurClientsSay />

      <section className="fourth-section">
        <div className="container">
          <TitleBradingLine
            title="Trụ sở INEC"
            description="Văn phòng tại TP.Hồ Chí Minh"
          />

          <div className="fourth-inner">
            <div className="four-left">
              <div className="col-left">
                <div className="col-inner">
                  <img
                    src="https://duhocinec.com/wp-content/uploads/2024/11/1.-293x185-hinh-van-phong-hcm-1024x647.jpg"
                    alt=""
                  />
                </div>

                <div className="col-inner">
                  <img
                    src="https://duhocinec.com/wp-content/uploads/2024/11/2.-293x185-hinh-van-phong-hcm-1024x647.jpg"
                    alt=""
                  />
                </div>

                <div className="col-inner">
                  <img
                    src="https://duhocinec.com/wp-content/uploads/2024/11/3.-293x185-hinh-van-phong-hcm-1024x647.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-right">
                <div className="col-inner">
                  <img
                    src="https://duhocinec.com/wp-content/uploads/2024/11/4.-293x613-hinh-van-phong-hcm-490x1024.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="four-right">
              <div className="col-left">
                <div className="col-inner">
                  <img
                    src="https://duhocinec.com/wp-content/uploads/2024/11/5.-293x185-hinh-van-phong-hcm-1024x647.jpg"
                    alt=""
                  />
                </div>

                <div className="col-inner">
                  <img
                    src="https://duhocinec.com/wp-content/uploads/2024/11/6.-293x185-hinh-van-phong-hcm-1024x647.jpg"
                    alt=""
                  />
                </div>

                <div className="col-inner">
                  <img
                    src="https://duhocinec.com/wp-content/uploads/2024/11/7.-293x185-hinh-van-phong-hcm-1024x647.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-right">
                <div className="col-inner">
                  <img
                    src="https://duhocinec.com/wp-content/uploads/2024/11/8.-293x613-hinh-van-phong-hcm-490x1024.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <p>Văn phòng tại Đà Nẵng</p>
          <div className="fourth-inner">
            <div className="four-left">
              <div className="col-left">
                <div className="col-inner">
                  <img
                    src="https://duhocinec.com/wp-content/uploads/2024/11/1.-293x185-hinh-van-phong-hcm-1024x647.jpg"
                    alt=""
                  />
                </div>

                <div className="col-inner">
                  <img
                    src="https://duhocinec.com/wp-content/uploads/2024/11/2.-293x185-hinh-van-phong-dn-1024x647.jpg"
                    alt=""
                  />
                </div>

                <div className="col-inner">
                  <img
                    src="https://duhocinec.com/wp-content/uploads/2024/11/3.-293x185-hinh-van-phong-dn-1024x647.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-right">
                <div className="col-inner">
                  <img
                    src="https://duhocinec.com/wp-content/uploads/2024/11/4.-293x613-hinh-van-phong-dn-490x1024.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="four-right">
              <div className="col-left">
                <div className="col-inner">
                  <img
                    src="https://duhocinec.com/wp-content/uploads/2024/11/5.-293x185-hinh-van-phong-dn-1024x647.jpg"
                    alt=""
                  />
                </div>

                <div className="col-inner">
                  <img
                    src="https://duhocinec.com/wp-content/uploads/2024/11/6.-293x185-hinh-van-phong-dn-1024x647.jpg"
                    alt=""
                  />
                </div>

                <div className="col-inner">
                  <img
                    src="https://duhocinec.com/wp-content/uploads/2024/11/7.-293x185-hinh-van-phong-dn-1024x647.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-right">
                <div className="col-inner">
                  <img
                    src="https://duhocinec.com/wp-content/uploads/2024/11/8.-293x613-hinh-van-phong-dn-490x1024.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntroduceINEC;
