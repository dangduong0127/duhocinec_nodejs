import React, { useState } from "react";
import "./styles.scss";
import TitleBradingLine from "../Title&BrandingLine";
import { Modal, Button, Carousel } from "antd";
import { Link } from "react-router-dom";
const WhatOurClientsSay = () => {
  const [isOpenModal, setIsModalOpen] = useState(false);

  return (
    <section className="clientsSay-wrapper">
      <div className="container">
        <TitleBradingLine
          title="Khách hàng nói gì về INEC?"
          description="Những đánh giá, trải nghiệm của khách hàng trong quá trình sử dụng dịch vụ du học tại INEC chính là sự ghi nhận cho quá trình hoạt động năng nổ và bền bỉ của chúng tôi."
        />

        <Carousel autoplay>
          <div className="wocs-carousel-item">
            <Link to>
              <div className="wocs-item">
                <div
                  className="wocs-imgbox"
                  onClick={() => setIsModalOpen(true)}
                >
                  <img
                    src="https://img.youtube.com/vi/DE2CgfUppus/0.jpg"
                    alt="wocs-thumbnail"
                  />
                  <div class="wpvl_auto_thumb_play">
                    <img
                      src="https://duhocinec.com/wp-content/plugins/wp-video-lightbox/images/play.png"
                      class="wpvl_playbutton"
                    />
                  </div>
                </div>
                <div className="wocs-txtbox">
                  <p>
                    <strong>
                      INEC Alumni Stories #3: Nguyễn Thị Hiền Tâm: Chọn công ty
                      du học Úc
                    </strong>
                  </p>
                </div>

                <Modal
                  title="What our client says?"
                  open={isOpenModal}
                  onCancel={() => setIsModalOpen(false)}
                  footer={null}
                  width={800}
                >
                  <iframe
                    width="100%"
                    height="400px"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Video Player"
                    allowFullScreen
                    style={{ borderRadius: "10px", border: "none" }}
                  ></iframe>
                </Modal>
              </div>
            </Link>

            <Link to>
              <div className="wocs-item">
                <div
                  className="wocs-imgbox"
                  onClick={() => setIsModalOpen(true)}
                >
                  <img
                    src="https://img.youtube.com/vi/DE2CgfUppus/0.jpg"
                    alt="wocs-thumbnail"
                  />
                  <div class="wpvl_auto_thumb_play">
                    <img
                      src="https://duhocinec.com/wp-content/plugins/wp-video-lightbox/images/play.png"
                      class="wpvl_playbutton"
                    />
                  </div>
                </div>
                <div className="wocs-txtbox">
                  <p>
                    <strong>
                      INEC Alumni Stories #3: Nguyễn Thị Hiền Tâm: Chọn công ty
                      du học Úc
                    </strong>
                  </p>
                </div>

                <Modal
                  title="What our client says?"
                  open={isOpenModal}
                  onCancel={() => setIsModalOpen(false)}
                  footer={null}
                  width={800}
                >
                  <iframe
                    width="100%"
                    height="400px"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Video Player"
                    allowFullScreen
                    style={{ borderRadius: "10px", border: "none" }}
                  ></iframe>
                </Modal>
              </div>
            </Link>
          </div>
        </Carousel>

        <div className="btn-wrapper">
          <button className="btn-rainbow-border">
            <span>Xem thêm trên Youtube của INEC</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatOurClientsSay;
