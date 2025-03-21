import React from "react";
import "./styles.scss";
import TitleCountryDetails from "../../TitleCountryDetails";
import { IconNews } from "../../../../components/Icons";
import { Link } from "react-router-dom";

const CountryVisa = ({ data }) => {
  return (
    <div id="visa" className="country-visa">
      <TitleCountryDetails
        title={`Visa ${data.title}`}
        icon={<IconNews size={40} color="red" />}
      />

      <div className="cc-loi-visa-container">
        <ul className="visa-ngn-hn-loi-c-ch-c-gi">
          <pre className="pre-content">
            <p>
              Sinh viên quốc tế cần phải xin thị thực (visa) và giấy phép học
              tập (study permit) để học tập dài hạn ở Canada. Điều kiện để xin
              những loại thủ tục này là cần phải có:
            </p>
            <ul>
              <li>
                Thư mời nhập học chương trình full-time từ một tổ chức giáo dục
                được chỉ định (DLI)
              </li>
              <li>Có thư chứng thực tỉnh bang PAL ( tùy chương trình)</li>
              <li>
                Có bằng chứng đủ năng lực chi trả sinh hoạt phí 20.635 CAD (năm
                đầu tiên)
              </li>
              <li>
                Có bằng chứng đóng học phí năm đầu tiên (tùy trường, tùy ngành)
              </li>
              <li>Bảng điểm, học bạ năm học gần nhất</li>
              <li>
                Bằng chứng đáp ứng yêu cầu khóa học [GPA, tiếng
                Anh/IELTS/TOEFL/PTE/GMAT/GRE…(nếu có và tùy trường, tùy ngành)]
              </li>
              <li>
                Bằng chứng kinh nghiệm làm việc (với các chương trình Sau đại
                học)…
              </li>
            </ul>
            <p>
              Trường hợp học sinh dưới 18 hoặc 19 tuổi tùy theo tỉnh bang cần có
              thêm giấy giám hộ của người giám hộ ở Canada.
            </p>
            <p>
              Thời gian xử lý hồ sơ visa du học Canada diện thông thường trung
              bình là 12 tuần.
              <br />
              Chi phí xin visa là 235 CAD (bao gồm lệ phí visa 150 CAD và phí
              sinh trắc học 85 CAD). Ngoài ra, du học sinh chương trình toàn
              thời gian bắt buộc phải khám sức khoẻ, phí khám khoảng 170 CAD
              (~126 USD).
            </p>
            <p>
              Bạn nên có kế hoạch và chiến lược sớm để chọn đúng ngành, đúng
              trường, đúng thành phố, xây dựng lộ trình học hợp lý, cải thiện hồ
              sơ…
            </p>
          </pre>
        </ul>
      </div>

      <div className="btn-wrapper">
        <Link to className="btn-show-more">
          Hướng dẫn tự apply visa
        </Link>

        <button className="btn-rainbow-border">
          <span>Apply visa khó khăn? Để INEC giúp bạn!</span>
        </button>
      </div>
    </div>
  );
};

export default CountryVisa;
