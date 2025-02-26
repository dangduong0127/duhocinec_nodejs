import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getCountryDetails } from "../../../utils/api";
import Banner from "../../../components/Banner";
import { IconBook, IconDollar, IconSearch } from "../../../components/Icons";
import "./styles.scss";
import Sidebar from "../../../components/Sidebar";
const CountryDetail = () => {
  const { slug } = useParams();
  const location = useLocation();
  const countryID = location?.state;
  const [countryData, setCountryData] = useState(null);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const { data } = await getCountryDetails(countryID);
        setCountryData(data.details);
      } catch (err) {
        console.error(err);
      }
    };
    fetchApi();
  }, []);

  const universities = [
    {
      name: "Đại học Lethbridge, Calgary",
      image:
        "https://duhocinec.com/wp-content/uploads/2025/02/ULethbridge1.jpg",
      location: "Calgary, Du học Canada",
      price: "400.000.000 VNĐ",
      link: "https://duhocinec.com/truong/dai-hoc-lethbridge-calgary/",
    },
    {
      name: "Cao đẳng Seneca Polytechnic",
      image:
        "https://duhocinec.com/wp-content/uploads/2024/10/acbSenecaMarkhamCampus3.jpg",
      location: "Chưa có thông tin thành phố, Du học Canada",
      price: "310.000.000 VNĐ",
      link: "https://duhocinec.com/truong/cao-dang-seneca-polytechnic-toronto/",
    },
    {
      name: "Đại học Wilfrid Laurier",
      image:
        "https://duhocinec.com/wp-content/uploads/2024/10/2016-dh-wilfrid-laurier.jpg",
      location: "Waterloo, Du học Canada",
      price: "600.000.000 VNĐ",
      link: "https://duhocinec.com/truong/dai-hoc-wilfrid-laurier/",
    },
    {
      name: "Đại học St. Francis Xavier",
      image:
        "https://duhocinec.com/wp-content/uploads/2024/12/St.-Francis-Xavier-University-Canada.jpg",
      location: "Nova Scotia, Du học Canada",
      price: "450.000.000 VNĐ",
      link: "https://duhocinec.com/truong/dai-hoc-st-francis-xavier/",
    },
    {
      name: "Cao đẳng Humber, Toronto",
      image:
        "https://duhocinec.com/wp-content/uploads/2024/10/230921-humber-northcampus-1024x682-1.jpg",
      location: "Etobicoke, Du học Canada",
      price: "300.000.000 VNĐ",
      link: "https://duhocinec.com/truong/cao-dang-humber-toronto/",
    },
    {
      name: "Trung học tỉnh Nova Scotia (NSISP)",
      image:
        "https://duhocinec.com/wp-content/uploads/2024/10/26-09-20-du-hoc-canada-chuong-trinh-trung-hoc-tinh-nova-scotia-nsisp-nam-2021-3.jpg",
      location: "Truro, Du học Canada",
      price: "180.000.000 VNĐ",
      link: "https://duhocinec.com/truong/trung-hoc-tinh-nova-scotia-nsisp/",
    },
  ];

  return (
    countryData && (
      <>
        <Banner />
        <div className="section-country-details container">
          <div className="country-wrapper">
            <Sidebar />

            <div className="country-detail-wrapper">
              <div className="country">
                <img
                  src="https://duhocinec.com/wp-content/uploads/2024/10/canada-01.png"
                  className="country-flag"
                  alt="flag"
                />
                <h1 className="country-name">Du học Canada</h1>
              </div>

              <div id="newPolicy">
                <div className="new-policy-title">
                  <IconBook size="40" color="red" />
                  <h2 class="chnh-sch-mi">
                    Chính sách <span>Du học Canada mới nhất</span>
                  </h2>
                </div>
                <div class="new-policy-content">
                  <pre class="pre-content">
                    {" "}
                    <p>
                      Canada đã dừng chương trình visa miễn chứng minh tài chính
                      (SDS). Chính phủ Canada vừa có quy định giờ làm thêm ngoài
                      trường cho sinh viên là 24 giờ/tuần.
                    </p>
                    <p>
                      Những thay đổi mới nhất này theo sau loạt thay đổi trước
                      đó đối với chương trình sinh viên quốc tế trong vòng 12
                      tháng qua.
                    </p>
                    <ul>
                      <li>
                        Bộ Di trú và Quốc tịch Canada (IRCC) có kế hoạch chỉ cấp
                        437.000 giấy phép du học trong năm 2025, giảm 10% so với
                        năm 2024.
                      </li>
                      <li>
                        Thay đổi yêu cầu với đơn xin giấy phép làm việc sau tốt
                        nghiệp (PGWP). Từ ngày 1/11/2024, tất cả đơn đăng ký xin
                        PGWP phải&nbsp; chứng minh trình độ ngôn ngữ tối thiểu
                        là tiếng Pháp hoặc tiếng Anh theo Tiêu chuẩn Ngôn ngữ
                        Canada (CLB) cấp độ 7 đối với sinh viên tốt nghiệp
                        chương trình học tại đại học và CLB 5 đối với sinh viên
                        tốt nghiệp trường cao đẳng (college).
                      </li>
                      <li>
                        Sinh viên tốt nghiệp các trường cao đẳng công lập sẽ vẫn
                        đủ điều kiện xin PGWP thời hạn đến 3 năm nếu họ tốt
                        nghiệp một lĩnh vực học tập liên quan đến các ngành nghề
                        đang thiếu hụt dài hạn.
                      </li>
                      <li>
                        Chỉ cấp Giấy phép làm việc cho vợ/chồng của những sinh
                        viên theo đuổi các chương trình Thạc sĩ kéo dài ít nhất
                        16 tháng; đồng thời giới hạn làm việc trong lĩnh vực
                        quản lý, chuyên môn hoặc trong các lĩnh vực thiếu hụt
                        lao động.
                      </li>
                      <li>
                        Từ 1/1/2024, IRCC tăng yêu cầu chứng minh tài chính khi
                        xin Giấy phép du học lên mức 20.635 CAD.
                      </li>
                    </ul>
                    <p>
                      Thoạt nhìn du học Canada dường như có không ít khó khăn,
                      thử thách cho sinh viên. Nhưng nếu xâu chuỗi lại và phân
                      tích sâu hơn, các thay đổi đang hướng tới bảo vệ tính toàn
                      vẹn hệ thống nhập cư và tăng trải nghiệm cuộc sống, học
                      tập cùng như các cơ hội rõ ràng hơn cho sinh viên.
                    </p>
                    <p>
                      Kết nối ngay với các chuyên gia hơn 20 năm kinh nghiệm tư
                      vấn du học Canada của INEC để được tư vấn, hỗ trợ thông
                      tin chính xác hơn.
                    </p>
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        paddingTop: "56.25%",
                      }}
                    >
                      <iframe
                        title="YouTube Video"
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          width: "100%",
                          height: "100%",
                          border: "none",
                        }}
                        src="https://www.youtube.com/embed/JgH0iZz8WcA"
                        allowFullScreen
                      />
                    </div>
                  </pre>
                </div>
                <button
                  className="btn-rainbow-border popmake-47305 pum-trigger"
                  style={{ cursor: "pointer" }}
                >
                  <span>Kết nối ngay với chuyên viên INEC</span>
                </button>
              </div>
              {/* <!-- cost estimate study abroad -->  */}
              <div id="cost_es_container">
                <div id="cost-est-study-abroad">
                  <div className="cost-est-study-abroad-title">
                    <IconDollar size="40" color="red" />
                    <h2 class="d-ton-chi">
                      Dự toán chi phí <span>Du học Canada</span>
                    </h2>
                  </div>
                  <div className="container-cost-est-study-abroad">
                    <div className="col-cosr-est-study-abroad">
                      <div className="input-filed-cost-est">
                        <select id="level_fee" className="">
                          <option value="Chọn bậc học">Chọn bậc học</option>
                          <option value="200000000">Trung Học</option>
                          <option value="350000000">Cao Đẳng</option>
                          <option value="400000000">Cử Nhân</option>
                          <option value="500000000">Thạc Sĩ</option>
                          <option value="300000000">
                            Chứng Chỉ Sau Đại Học
                          </option>
                        </select>
                      </div>
                      <div className="input-filed-cost-est">
                        <select id="city_fee" className="">
                          <option value="Chọn thành phố">Chọn thành phố</option>
                          <option value="250000000">Toronto, ON</option>
                          <option value="250000000">Winnipeg, MB</option>
                          <option value="230000000">Ottawa, ON</option>
                          <option value="180000000">Nova Scotia</option>
                          <option value="350000000">Vancouver, B.C</option>
                          <option value="250000000">Langley, B.C</option>
                          <option value="250000000">Burnaby, B.C</option>
                          <option value="250000000">Victoria, B.C</option>
                          <option value="250000000">Surrey, B.C</option>
                          <option value="220000000">Saskatoon, SK</option>
                          <option value="300000000">Calgary, AB</option>
                          <option value="300000000">Edmonton, AB</option>
                          <option value="250000000">
                            Mississauga/ Brampton, ON
                          </option>
                          <option value="250000000">Waterloo, ON</option>
                          <option value="180000000">New Brunswick</option>
                          <option value="300000000">Regina, SK</option>
                          <option value="250000000">Moncton, NB</option>
                          <option value="250000000">Halifax, NS</option>
                        </select>
                      </div>
                      <button className="btn-rainbow-border">
                        <span id="estimate-button">Ước tính</span>
                      </button>
                    </div>
                    <div
                      id="result-estimate"
                      className="col1-cosr-est-study-abroad"
                      style={{ display: "none" }}
                    >
                      <div
                        id="loading-indicator"
                        style={{ display: "none", textAlign: "center" }}
                      >
                        <p>Đang tính toán...</p>
                      </div>

                      <div className="d-ton-chi1">Dự toán chi phí</div>
                      <div className="hc-ph-11-container">
                        <ul className="hc-ph-11-t-vndnm-sinh-h">
                          <li className="hc-ph-11-t-vndnm">
                            <span className="sinh-hot-ph">
                              Học phí: 1,1 tỷ VND/năm
                            </span>
                          </li>
                          <li className="hc-ph-11-t-vndnm">
                            <span className="sinh-hot-ph">
                              Sinh hoạt phí: 1,1 tỷ VND/năm
                            </span>
                          </li>
                        </ul>
                        <p className="tng-c-tnh">
                          Tổng ước tính: 2,2 tỷ VND/năm
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Country details */}
              <div id="country-details-container">
                <div className="country-details-container-title">
                  <IconSearch size="40" color="red" />
                  <h2
                    style={{ fontSize: "32px", margin: 0, color: "#000" }}
                    className="bn-nn-chn"
                  >
                    <span>Du học Canada</span> nên chọn trường nào
                  </h2>
                </div>

                <div className="country-details-container-content-wrapper">
                  <div className="country-details-filter">
                    <form
                      data-sf-form-id="47364"
                      data-is-rtl="0"
                      data-maintain-state=""
                      data-ajax-url="https://duhocinec.com/?sfid=47364&amp;sf_action=get_data&amp;sf_data=all"
                      data-ajax-form-url="https://duhocinec.com/?sfid=47364&amp;sf_action=get_data&amp;sf_data=form"
                      data-display-result-method="shortcode"
                      data-use-history-api="1"
                      data-template-loaded="0"
                      data-lang-code="vi"
                      data-ajax="1"
                      data-ajax-data-type="json"
                      data-ajax-links-selector=".pagination a"
                      data-ajax-target="#search-filter-results-47364"
                      data-ajax-pagination-type="normal"
                      data-scroll-to-pos="results"
                      data-scroll-on-action="pagination"
                      data-init-paged="1"
                      data-auto-update="1"
                      data-auto-count="1"
                      action=""
                      method="post"
                      className="searchandfilter"
                      id="search-filter-form-47364"
                      autocomplete="off"
                      data-instance-count="1"
                      data-gtm-form-interact-id="0"
                    >
                      <ul>
                        <li
                          className="sf-field-taxonomy-faculty"
                          data-sf-field-name="_sft_faculty"
                          data-sf-field-type="taxonomy"
                          data-sf-field-input-type="select"
                          data-sf-term-rewrite='["https:\/\/duhocinec.com\/faculty\/[0]\/"]'
                        >
                          <h4>Ngành</h4>{" "}
                          <label>
                            <select
                              name="_sfm_country_post_type[]"
                              className="sf-input-select"
                              title=""
                            >
                              <option
                                className="sf-level-0 sf-item-0"
                                data-sf-depth="0"
                                value=""
                              >
                                All Items
                              </option>
                              <option
                                className="sf-level-0 sf-option-active"
                                selected="selected"
                                data-sf-count="49"
                                data-sf-depth="0"
                                value="47207"
                              >
                                Du học Canada&nbsp;&nbsp;(2)
                              </option>
                            </select>
                          </label>{" "}
                        </li>

                        <li
                          className="sf-field-taxonomy-faculty"
                          data-sf-field-name="_sft_faculty"
                          data-sf-field-type="taxonomy"
                          data-sf-field-input-type="select"
                          data-sf-term-rewrite='["https:\/\/duhocinec.com\/faculty\/[0]\/"]'
                        >
                          <h4>Ngành</h4>{" "}
                          <label>
                            <select
                              name="_sfm_country_post_type[]"
                              className="sf-input-select"
                              title=""
                            >
                              <option
                                className="sf-level-0 sf-item-0"
                                data-sf-depth="0"
                                value=""
                              >
                                All Items
                              </option>
                              <option
                                className="sf-level-0 sf-option-active"
                                selected="selected"
                                data-sf-count="49"
                                data-sf-depth="0"
                                value="47207"
                              >
                                Du học Canada&nbsp;&nbsp;(2)
                              </option>
                            </select>
                          </label>{" "}
                        </li>

                        <li
                          className="sf-field-taxonomy-faculty"
                          data-sf-field-name="_sft_faculty"
                          data-sf-field-type="taxonomy"
                          data-sf-field-input-type="select"
                          data-sf-term-rewrite='["https:\/\/duhocinec.com\/faculty\/[0]\/"]'
                        >
                          <h4>Ngành</h4>{" "}
                          <label>
                            <select
                              name="_sfm_country_post_type[]"
                              className="sf-input-select"
                              title=""
                            >
                              <option
                                className="sf-level-0 sf-item-0"
                                data-sf-depth="0"
                                value=""
                              >
                                All Items
                              </option>
                              <option
                                className="sf-level-0 sf-option-active"
                                selected="selected"
                                data-sf-count="49"
                                data-sf-depth="0"
                                value="47207"
                              >
                                Du học Canada&nbsp;&nbsp;(2)
                              </option>
                            </select>
                          </label>{" "}
                        </li>
                        <li
                          className="sf-field-submit"
                          data-sf-field-name="submit"
                          data-sf-field-type="submit"
                          data-sf-field-input-type=""
                        >
                          <input
                            type="submit"
                            name="_sf_submit"
                            value="Tìm trường phù hợp"
                          />
                        </li>
                      </ul>
                    </form>
                  </div>

                  <div className="country-details-col">
                    <div
                      className="search-filter-results"
                      id="search-filter-results-47364"
                    >
                      {universities.map((uni, index) => (
                        <a
                          key={index}
                          href={uni.link}
                          className="country-details-school-card"
                        >
                          <div className="country-details-card-img">
                            <img
                              width="100%"
                              height="auto"
                              src={uni.image}
                              alt={uni.name}
                            />
                          </div>
                          <div className="country-details-text">
                            <div className="university-of-british">
                              {uni.name}
                            </div>
                            <div className="country-details-info">
                              <div className="country-details-location">
                                <svg
                                  width="20"
                                  height="21"
                                  viewBox="0 0 20 21"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    y="0.5"
                                    width="20"
                                    height="20"
                                    fill="#D9D9D9"
                                  ></rect>
                                </svg>
                                <div className="vancouver-canada">
                                  {uni.location}
                                </div>
                              </div>
                              <div className="country-details-location">
                                <svg
                                  width="20"
                                  height="21"
                                  viewBox="0 0 20 21"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    y="0.5"
                                    width="20"
                                    height="20"
                                    fill="#D9D9D9"
                                  ></rect>
                                </svg>
                                <div className="vancouver-canada">
                                  Chỉ từ {uni.price}
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default CountryDetail;
