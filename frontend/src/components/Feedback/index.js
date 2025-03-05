import React, { useState } from "react";
import "./styles.scss";
import TitleCountryDetails from "../../pages/Countries/TitleCountryDetails";
import { IconComma, IconFlag } from "../Icons";
import { Carousel, Modal } from "antd";
import { Link } from "react-router-dom";

const Feedback = () => {
  const [isOpenModal, setIsModalOpen] = useState(false);

  return (
    <div className="feedback-section">
      <TitleCountryDetails
        title="Khách hàng nói gì về Du học Canada"
        icon={<IconFlag size="40" color="red" />}
      />

      <Carousel autoplay>
        <div className="feedback-carousel-inner">
          <div to className="review-card">
            <div className="wocs-imgbox" onClick={() => setIsModalOpen(true)}>
              <img
                src="https://img.youtube.com/vi/DE2CgfUppus/0.jpg"
                alt="wocs-thumbnail"
              />
              <div className="wpvl_auto_thumb_play">
                <img
                  src="https://duhocinec.com/wp-content/plugins/wp-video-lightbox/images/play.png"
                  className="wpvl_playbutton"
                  alt=""
                />
              </div>
            </div>
            <div className="reviewer-info">
              <div className="info-user">
                <div className="nguyn-vn-a">Chị Trần Thị Hồng Nhung</div>
                <div className="c-nhn-qun">Phụ huynh học sinh</div>
              </div>
              <IconComma size="40" color="red" />
            </div>

            <div className="ti-thch-chi">
              Chị cũng không nhớ vì sao chọn INEC nhưng chị không hối hận khi
              chọn INEC. Các bạn đã làm rất tốt. Cá nhân chị và bạn bè chị giới
              thiệu đều rất hài lòng.
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

          <div to className="review-card">
            <div className="wocs-imgbox" onClick={() => setIsModalOpen(true)}>
              <img
                src="https://img.youtube.com/vi/DE2CgfUppus/0.jpg"
                alt="wocs-thumbnail"
              />
              <div className="wpvl_auto_thumb_play">
                <img
                  src="https://duhocinec.com/wp-content/plugins/wp-video-lightbox/images/play.png"
                  className="wpvl_playbutton"
                  alt=""
                />
              </div>
            </div>
            <div className="reviewer-info">
              <div className="info-user">
                <div className="nguyn-vn-a">Chị Trần Thị Hồng Nhung</div>
                <div className="c-nhn-qun">Phụ huynh học sinh</div>
              </div>
              <IconComma size="40" color="red" />
            </div>

            <div className="ti-thch-chi">
              Chị cũng không nhớ vì sao chọn INEC nhưng chị không hối hận khi
              chọn INEC. Các bạn đã làm rất tốt. Cá nhân chị và bạn bè chị giới
              thiệu đều rất hài lòng.
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

          <div to className="review-card">
            <div className="wocs-imgbox" onClick={() => setIsModalOpen(true)}>
              <img
                src="https://img.youtube.com/vi/DE2CgfUppus/0.jpg"
                alt="wocs-thumbnail"
              />
              <div className="wpvl_auto_thumb_play">
                <img
                  src="https://duhocinec.com/wp-content/plugins/wp-video-lightbox/images/play.png"
                  className="wpvl_playbutton"
                  alt=""
                />
              </div>
            </div>
            <div className="reviewer-info">
              <div className="info-user">
                <div className="nguyn-vn-a">Chị Trần Thị Hồng Nhung</div>
                <div className="c-nhn-qun">Phụ huynh học sinh</div>
              </div>
              <IconComma size="40" color="red" />
            </div>

            <div className="ti-thch-chi">
              Chị cũng không nhớ vì sao chọn INEC nhưng chị không hối hận khi
              chọn INEC. Các bạn đã làm rất tốt. Cá nhân chị và bạn bè chị giới
              thiệu đều rất hài lòng.
            </div>

            <Modal
              title="Feedback"
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
        </div>
      </Carousel>
    </div>
  );
};

export default Feedback;
