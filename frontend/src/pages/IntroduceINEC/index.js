import React from "react";
import "./styles.scss";

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
    </div>
  );
};

export default IntroduceINEC;
