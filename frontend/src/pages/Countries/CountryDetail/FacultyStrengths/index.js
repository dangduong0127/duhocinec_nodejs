import React from "react";
import "./styles.scss";
import TitleCountryDetails from "../../TitleCountryDetails";
import { IconCertificate } from "../../../../components/Icons";
import { Link } from "react-router-dom";

const FacultyStrengths = () => {
  return (
    <div className="country-faculty-strengths">
      <TitleCountryDetails
        title="Các ngành đào tạo thế mạnh"
        icon={<IconCertificate size="40" color="red" />}
      />

      <pre className="pre-content">
        <p>
          Canada nổi tiếng với các ngành đào tạo hàng đầu như khoa học máy tính,
          công nghệ thông tin, quản trị kinh doanh, chăm sóc sức khỏe, y tế,
          giáo dục và đào tạo. Hệ thống giáo dục Canada kết hợp thực hành và
          nghiên cứu, đáp ứng nhu cầu nhân lực chất lượng cao. Đặc biệt, các
          ngành như trí tuệ nhân tạo, kỹ thuật phần mềm, quản lý tài chính, điều
          dưỡng và giáo dục sư phạm được đánh giá cao nhờ chương trình giảng dạy
          hiện đại, hỗ trợ từ chính phủ và cơ hội việc làm sau tốt nghiệp.
        </p>
      </pre>

      <div className="major-list">
        <div className="country-faculty-strengths-col">
          <Link
            target="_blank"
            href="https://duhocinec.com/tra-cuu-khoa-hoc/?_sft_faculty=khoa-hoc-may-tinh-cong-nghe-thong-tin&amp;_sfm_country_post_type=47207"
            className="major"
          >
            <img
              className="devices-icon"
              alt=""
              src="https://duhocinec.com/wp-content/uploads/2024/10/icon-information-technology-001.png"
            />
            <div className="cng-ngh-thng">Khoa học máy tính - IT</div>
          </Link>
          <Link
            target="_blank"
            href="https://duhocinec.com/tra-cuu-khoa-hoc/?_sft_faculty=kinh-doanh-va-quan-tri&amp;_sfm_country_post_type=47207"
            className="major"
          >
            <img
              className="devices-icon"
              alt=""
              src="https://duhocinec.com/wp-content/uploads/2024/10/icon-business.png"
            />
            <div className="cng-ngh-thng">Kinh doanh - Quản trị</div>
          </Link>
          <Link
            target="_blank"
            href="https://duhocinec.com/tra-cuu-khoa-hoc/?_sft_faculty=ky-thuat-ung-dung&amp;_sfm_country_post_type=47207"
            className="major"
          >
            <img
              className="devices-icon"
              alt=""
              src="https://duhocinec.com/wp-content/uploads/2024/10/icon-engineering.png"
            />
            <div className="cng-ngh-thng">Kỹ thuật</div>
          </Link>
          <Link
            target="_blank"
            href="https://duhocinec.com/tra-cuu-khoa-hoc/?_sft_faculty=cham-soc-suc-khoe-y-te&amp;_sfm_country_post_type=47207"
            className="major"
          >
            <img
              className="devices-icon"
              alt=""
              src="https://duhocinec.com/wp-content/uploads/2024/10/icon-health.png"
            />
            <div className="cng-ngh-thng">Chăm sóc sức khoẻ - Y tế</div>
          </Link>
          <Link
            target="_blank"
            href="https://duhocinec.com/tra-cuu-khoa-hoc/?_sft_faculty=giao-duc-va-dao-tao&amp;_sfm_country_post_type=47207"
            className="major"
          >
            <img
              className="devices-icon"
              alt=""
              src="https://duhocinec.com/wp-content/uploads/2024/10/icon-education-001.png"
            />
            <div className="cng-ngh-thng">Giáo dục và đào tạo</div>
          </Link>
          <Link
            target="_blank"
            href="https://duhocinec.com/tra-cuu-khoa-hoc/?_sft_faculty=hospitality&amp;_sfm_country_post_type=47207"
            className="major"
          >
            <img
              className="devices-icon"
              alt=""
              src="https://duhocinec.com/wp-content/uploads/2024/10/icon-hospitality-1.png"
            />
            <div className="cng-ngh-thng">Hospitality</div>
          </Link>
          <Link
            target="_blank"
            href="https://duhocinec.com/tra-cuu-khoa-hoc/?_sft_faculty=nong-lam-ngu-nghiep&amp;_sfm_country_post_type=47207"
            className="major"
          >
            <img
              className="devices-icon"
              alt=""
              src="https://duhocinec.com/wp-content/uploads/2024/09/icon-Agriculture-001.png"
            />
            <div className="cng-ngh-thng">Nông nghiệp - Thực phẩm</div>
          </Link>
          <Link
            target="_blank"
            href="https://duhocinec.com/tra-cuu-khoa-hoc/?_sft_faculty=truyen-thong-media&amp;_sfm_country_post_type=47207"
            className="major"
          >
            <img
              className="devices-icon"
              alt=""
              src="https://duhocinec.com/wp-content/uploads/2024/10/icon-film.png"
            />
            <div className="cng-ngh-thng">Truyền thông - Media</div>
          </Link>
          <Link
            target="_blank"
            href="https://duhocinec.com/tra-cuu-khoa-hoc/?_sft_faculty=nghe-thuat-sang-tao-thiet-ke&amp;_sfm_country_post_type=47207"
            className="major"
          >
            <img
              className="devices-icon"
              alt=""
              src="https://duhocinec.com/wp-content/uploads/2024/10/icon-design-001.png"
            />
            <div className="cng-ngh-thng">Thiết kế - Sáng tạo</div>
          </Link>
        </div>
      </div>

      <div className="btn-wrapper">
        <Link className="btn-show-more">Xem tất cả ngành học</Link>
      </div>
    </div>
  );
};

export default FacultyStrengths;
