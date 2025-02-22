import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import TitleBradingLine from "../../pages/HomePage/Title&BrandingLine";

const IntroduceContries = () => {
  const [isHovered, setIsHovered] = useState(0);

  const items = [
    {
      id: "#tab-chau-au",
      name: "Châu Âu",
    },
    {
      id: "#tab-bac-my",
      name: "Châu Mỹ",
    },
    {
      id: "#tab-chau-a",
      name: "Châu Á",
    },
    {
      id: "#tab-chau-uc",
      name: "Châu Úc",
    },
  ];

  return (
    <>
      <section className="introCountries-section">
        <div className="introCountries-wrapper">
          <div className="row-content container">
            <TitleBradingLine title="Du học 17 quốc gia - Mở khoá tương lai cùng INEC" />

            <div className="tabbed-content">
              <ul className="nav-list">
                {items.map((item, index) => {
                  return (
                    <li
                      className={isHovered === index ? "tab active" : "tab"}
                      key={item.id}
                      onMouseOver={() => setIsHovered(index)}
                    >
                      <Link to={item.id}>{item.name}</Link>
                    </li>
                  );
                })}
              </ul>

              <div className="tab-panels">
                {items && items.length > 0 ? (
                  items.map((item, index) => {
                    return (
                      <div
                        key={item.id}
                        className={
                          isHovered === index
                            ? "panel entry-content active"
                            : "panel entry-content"
                        }
                        id={item.id}
                      >
                        <div className="country-box">
                          <Link>
                            <img
                              src="http://localhost:1988/uploads/du-hoc-ao-2025-inec-280x158.jpg"
                              alt=""
                            />
                            <h3 className="country-name">Du học áo</h3>
                          </Link>
                        </div>

                        <div className="country-box">
                          <Link>
                            <img
                              src="http://localhost:1988/uploads/du-hoc-ao-2025-inec-280x158.jpg"
                              alt=""
                            />
                            <h3 className="country-name">Du học áo</h3>
                          </Link>
                        </div>

                        <div className="country-box">
                          <Link>
                            <img
                              src="http://localhost:1988/uploads/du-hoc-ao-2025-inec-280x158.jpg"
                              alt=""
                            />
                            <h3 className="country-name">Du học áo</h3>
                          </Link>
                        </div>

                        <div className="country-box">
                          <Link>
                            <img
                              src="http://localhost:1988/uploads/du-hoc-ao-2025-inec-280x158.jpg"
                              alt=""
                            />
                            <h3 className="country-name">Du học áo</h3>
                          </Link>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <>No values</>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroduceContries;
