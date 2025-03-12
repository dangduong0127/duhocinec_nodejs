import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getCountryDetails } from "../../../utils/api";
import Banner from "../../../components/Banner";
import {
  IconBook,
  IconCollege,
  IconNews,
  IconDollar,
  IconDollar2,
  IconLocaltion,
  IconSearch,
} from "../../../components/Icons";
import "./styles.scss";
import Sidebar from "../../../components/Sidebar";
import Schoolarship from "../../../components/Scholarship";
import TitleCountryDetails from "../TitleCountryDetails";
// import { DownOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import CountryLearnMore from "./CountryLearnmore";
import FacultyStrengths from "./FacultyStrengths";
import CountryVisa from "./CountryVisa";
import Feedback from "../../../components/Feedback";
import { Carousel } from "antd";
import DOMPurify from "dompurify";
const CountryDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const countryID = location?.state;
  const [countryData, setCountryData] = useState(null);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const { data } = await getCountryDetails(countryID);

        if (data.success === true) {
          setCountryData(data.details);
          console.log(data);
        } else {
          navigate("/");
        }
      } catch (err) {
        console.error(err);
        setCountryData(null);
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

  const [cityFee, setCityFee] = useState(null);

  const handleCityFeeChange = (e) => {
    setCityFee(e.target.value);
  };
  console.log("country data:", countryData);
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
                <h1 className="country-name">
                  {countryData.title || "Title page"}
                </h1>
              </div>

              <div id="newPolicy">
                <TitleCountryDetails
                  title={`Chính sách ${countryData.title}`}
                  icon={<IconBook size="40" color="red" />}
                />
                <div className="new-policy-content">
                  {countryData.postMeta.map((item) => {
                    const data = JSON.parse(item.field_value).value;
                    return (
                      <pre
                        className="pre-content"
                        key={item.id}
                        dangerouslySetInnerHTML={{ __html: data }}
                      />
                    );
                  })}
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
                  <TitleCountryDetails
                    title={`Dự toán chi phí ${countryData.title}`}
                    icon={<IconDollar size="40" color="red" />}
                  />

                  <div className="container-cost-est-study-abroad">
                    <div className="col-cosr-est-study-abroad">
                      <div className="input-filed-cost-est">
                        <select
                          id="level_fee"
                          value={cityFee}
                          onChange={handleCityFeeChange}
                          className=""
                        >
                          <option value="Chọn bậc học" selected>
                            Chọn bậc học
                          </option>
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
                          <option value="Chọn thành phố" selected>
                            Chọn thành phố
                          </option>
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
                <TitleCountryDetails
                  title={`${countryData.title} nên chọn trường nào`}
                  icon={<IconSearch size="40" color="red" />}
                />

                <div className="country-details-container-content-wrapper">
                  <div className="country-details-filter">
                    <form
                      data-sf-form-id="47364"
                      data-is-rtl="0"
                      data-maintain-state=""
                      // data-ajax-url="https://duhocinec.com/?sfid=47364&amp;sf_action=get_data&amp;sf_data=all"
                      // data-ajax-form-url="https://duhocinec.com/?sfid=47364&amp;sf_action=get_data&amp;sf_data=form"
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
                      data-instance-count="1"
                      data-gtm-form-interact-id="0"
                    >
                      <ul>
                        <li
                          className="sf-field-taxonomy-faculty"
                          data-sf-field-name="_sft_faculty"
                          data-sf-field-type="taxonomy"
                          data-sf-field-input-type="select"
                          // data-sf-term-rewrite='["https:\/\/duhocinec.com\/faculty\/[0]\/"]'
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
                                value="0"
                                selected
                              >
                                All Items
                              </option>
                              <option
                                className="sf-level-0 sf-option-active"
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
                          // data-sf-term-rewrite='["https:\/\/duhocinec.com\/faculty\/[0]\/"]'
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
                                value="0"
                                selected
                              >
                                All Items
                              </option>
                              <option
                                className="sf-level-0 sf-option-active"
                                // selected="selected"
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
                          // data-sf-term-rewrite='["https:\/\/duhocinec.com\/faculty\/[0]\/"]'
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
                                selected
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
                                <IconLocaltion size="20" color="#000" />
                                <div className="vancouver-canada">
                                  {uni.location}
                                </div>
                              </div>
                              <div className="country-details-location">
                                <IconDollar2 size="20" color="#000" />
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

              <Schoolarship />

              <div id="required-country">
                <TitleCountryDetails
                  title="Yêu cầu đầu vào"
                  icon={<IconCollege size="40" color="red" />}
                />

                <pre className="pre-content">
                  <p>
                    Canada yêu cầu sinh viên quốc tế có chứng chỉ ngoại ngữ như
                    IELTS, TOEFL (đối với tiếng Anh) hoặc TEF, TCF (đối với
                    tiếng Pháp). Ngoài ra, ứng viên cần cung cấp hồ sơ học tập
                    và kinh nghiệm làm việc liên quan (nếu có), đặc biệt quan
                    trọng cho các bậc sau đại học như thạc sĩ, tiến sĩ.
                  </p>
                </pre>

                <div className="required-detail">
                  <div className="single-required">
                    <div className="single-required-content">
                      <h3>Trung học </h3>
                      <div className="single-required-ul-content">
                        <ul style={{ opacity: "0", height: "0" }}>
                          <li>
                            <FontAwesomeIcon icon={faChevronDown} />
                          </li>
                        </ul>
                        <ul className="required-ul-content">
                          <pre className="pre-content">
                            <ul>
                              <li>Có kết quả học tập trung bình khá trở lên</li>
                              <li>Tiếng Anh trình độ giao tiếp</li>
                              <li>Không bắt buộc có IELTS/TOEFL</li>
                            </ul>
                            <p>&nbsp;</p>
                          </pre>
                        </ul>
                      </div>
                      <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                  </div>
                  <div className="single-required">
                    <div className="single-required-content">
                      <h3>Cao đẳng</h3>
                      <div className="single-required-ul-content">
                        <ul>
                          <li>
                            <FontAwesomeIcon icon={faChevronDown} />
                          </li>
                        </ul>
                        <ul className="required-ul-content">
                          <pre className="pre-content">
                            <ul>
                              <li>Tốt nghiệp THPT</li>
                              <li>
                                IELTS 6.0; hoặc chứng chỉ khác trình độ tương
                                đương
                              </li>
                              <li>Hoặc học khóa tiếng Anh của trường</li>
                            </ul>
                          </pre>
                        </ul>
                      </div>
                      <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                  </div>
                  <div className="single-required">
                    <div className="single-required-content">
                      <h3>Cử nhân</h3>
                      <div className="single-required-ul-content">
                        <ul>
                          <li>
                            <FontAwesomeIcon icon={faChevronDown} />
                          </li>
                        </ul>
                        <ul className="required-ul-content">
                          <pre className="pre-content">
                            <ul>
                              <li>Tốt nghiệp THPT</li>
                              <li>
                                IELTS 6.5; hoặc chứng chỉ khác trình độ tương
                                đương
                              </li>
                              <li>Hoặc học khóa tiếng Anh tại trường</li>
                            </ul>
                          </pre>
                        </ul>
                      </div>
                      <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                  </div>
                  <div className="single-required">
                    <div className="single-required-content">
                      <h3>Thạc sĩ </h3>
                      <div className="single-required-ul-content">
                        <ul>
                          <li>
                            <FontAwesomeIcon icon={faChevronDown} />
                          </li>
                        </ul>
                        <ul className="required-ul-content">
                          <pre className="pre-content">
                            <ul>
                              <li>Tốt nghiệp Cử nhân</li>
                              <li>
                                IELTS 6.5; hoặc chứng chỉ khác trình độ tương
                                đương; hoặc học khóa tiếng Anh tại trường
                              </li>
                              <li>
                                GRE/GMAT và kinh nghiệm làm việc (tùy ngành)
                              </li>
                            </ul>
                          </pre>
                        </ul>
                      </div>
                      <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                  </div>
                  <div className="single-required">
                    <div className="single-required-content">
                      <h3>Chứng chỉ Sau đại học</h3>
                      <div className="single-required-ul-content">
                        <ul>
                          <li>
                            <FontAwesomeIcon icon={faChevronDown} />
                          </li>
                        </ul>
                        <ul className="required-ul-content">
                          <pre className="pre-content">
                            <ul>
                              <li>Tốt nghiệp Cao đẳng hoặc Cử nhân</li>
                              <li>
                                IELTS 6.5; hoặc chứng chỉ khác trình độ tương
                                đương; hoặc học tiếng Anh tại trường
                              </li>
                              <li>Thường không yêu cầu kinh nghiệm/GMAT/GRE</li>
                            </ul>
                          </pre>
                        </ul>
                      </div>
                      <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                  </div>
                </div>

                <div className="btn-wrapper">
                  <button className="btn-rainbow-border">
                    <span>Kết nối tư vấn ngay cùng INEC</span>
                  </button>
                </div>
              </div>

              <CountryLearnMore data={countryData} />
              <FacultyStrengths data={countryData} />
              <CountryVisa data={countryData} />
              <Feedback data={countryData} />

              <div className="news-post">
                <TitleCountryDetails
                  title="Tin tức"
                  icon={<IconNews size="40" color="red" />}
                />

                <div className="btn-nav-wrapper">
                  <button
                    id="57713"
                    value="true"
                    className="btn-sm-news btn-sm-active"
                  >
                    Tin đọc nhiều nhất
                  </button>
                  <button id="57713" value="false" className="btn-sm-news">
                    Tin mới nhất
                  </button>
                  <button id="57614" value="true" className="btn-sm-news">
                    Sự kiện
                  </button>
                </div>

                <div className="country-news-countainer">
                  <Carousel draggable>
                    <div className="news-row">
                      <Link className="news-card show">
                        <img
                          className="photo-animation-icon"
                          alt="Hội thảo: Chiến lược tối ưu bằng cấp, việc làm và định cư Canada"
                          src="https://duhocinec.com/wp-content/uploads/2024/09/xin-thi-chung-thuc-apply-visa-canada-03.jpg"
                        />
                        <div className="news-main-text">
                          <div className="news-content">
                            <h4 className="qun-l-kinh">
                              Hội thảo: Chiến lược tối ưu bằng cấp, việc làm và
                              định cư Canada
                            </h4>
                            <div className="news-excerpt">
                              Du học Canada bậc Đại học có phải là dự định của
                              bạn? Tham gia ngay hội thảo của INEC để nhận thông
                              tin hữu ích về chính sách mới, có chiến lược tối
                              ưu bằng cấp, cơ hội việc làm và định cư. Cơ hội tư
                              vấn trực tiếp lộ trình chinh phục bằng Cử nhân
                              danh giá của top trường đại học hàng đầu xứ lá
                              phong.
                            </div>
                          </div>
                          <div className="createdAt">24-01-2025</div>
                        </div>
                      </Link>

                      <Link className="news-card show">
                        <img
                          className="photo-animation-icon"
                          alt="Hội thảo: Chiến lược tối ưu bằng cấp, việc làm và định cư Canada"
                          src="https://duhocinec.com/wp-content/uploads/2024/09/xin-thi-chung-thuc-apply-visa-canada-03.jpg"
                        />
                        <div className="news-main-text">
                          <div className="news-content">
                            <h4 className="qun-l-kinh">
                              Hội thảo: Chiến lược tối ưu bằng cấp, việc làm và
                              định cư Canada
                            </h4>
                            <div className="news-excerpt">
                              Du học Canada bậc Đại học có phải là dự định của
                              bạn? Tham gia ngay hội thảo của INEC để nhận thông
                              tin hữu ích về chính sách mới, có chiến lược tối
                              ưu bằng cấp, cơ hội việc làm và định cư. Cơ hội tư
                              vấn trực tiếp lộ trình chinh phục bằng Cử nhân
                              danh giá của top trường đại học hàng đầu xứ lá
                              phong.
                            </div>
                          </div>
                          <div className="createdAt">24-01-2025</div>
                        </div>
                      </Link>
                    </div>
                  </Carousel>
                </div>

                <div className="btn-wrapper">
                  <button className="btn-show-more">Xem thêm</button>
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
