import React from "react";
import "./styles.scss";
import TitleBradingLine from "../Title&BrandingLine";
import { Link } from "react-router-dom";

const SuccessStory = () => {
  return (
    <section className="success-story-wrapper">
      <div className="container">
        <TitleBradingLine
          title="Câu chuyện thành công"
          description="Đầu tư cho giáo dục là khoản đầu tư mang lại lợi nhuận lâu dài. Du học sinh INEC đã đạt được nhiều điều hơn là chỉ nhận bằng cấp giá trị, kiếm được một công việc ổn định. Họ định hình sự nghiệp của riêng mình, góp phần thay đổi thế giới, trở thành những công dân toàn cầu ưu tú."
        />

        <div className="carousel-content">
          <div className="carousel-item">
            <Link to>
              <d></d>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;
