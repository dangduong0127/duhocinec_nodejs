import React from "react";
import "./styles.scss";
import TitleBradingLine from "../Title&BrandingLine";

const WhatOurClientsSay = () => {
  return (
    <section className="clientsSay-wrapper">
      <div className="container">
        <TitleBradingLine
          title="Khách hàng nói gì về INEC?"
          description="Những đánh giá, trải nghiệm của khách hàng trong quá trình sử dụng dịch vụ du học tại INEC chính là sự ghi nhận cho quá trình hoạt động năng nổ và bền bỉ của chúng tôi."
        />
      </div>
    </section>
  );
};

export default WhatOurClientsSay;
