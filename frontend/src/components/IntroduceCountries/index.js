import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import TitleBradingLine from "../../pages/HomePage/Title&BrandingLine";
import { getAllCountries } from "../../utils/api";
import SingleCountry from "./SingleCountry";
const IntroduceContries = () => {
  const [isHovered, setIsHovered] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllCountries();
      setData(res.data);
    };
    fetchData();
  }, []);

  const items = [
    {
      id: 22,
      name: "Châu Âu",
    },
    {
      id: 23,
      name: "Châu Mỹ",
    },
    {
      id: 24,
      name: "Châu Á",
    },
    {
      id: 25,
      name: "Châu Úc",
    },
  ];
  console.log(data);
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
                        {data &&
                          data.map((data, index) => {
                            let output = null;
                            if (item.id === data.category_id) {
                              console.log(data);
                              output = (
                                <div key={index} className="country-box">
                                  <SingleCountry data={data} />
                                </div>
                              );
                            }
                            return output;
                          })}
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
