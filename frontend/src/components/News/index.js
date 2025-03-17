import React from "react";
import "./styles.scss";
import TitleBradingLine from "../../pages/HomePage/Title&BrandingLine";
import { Link } from "react-router-dom";
import getImageUrl from "../../utils/getImage";

const News = ({ data }) => {
  return (
    <section className="news-section">
      <div className="container">
        <TitleBradingLine title="Tin tức" />

        <div className="news-wrapper">
          <div className="news-inner">
            {data.map((post) => {
              return post.postsCategory.map((item) => {
                return (
                  <Link
                    key={item.id}
                    to={`${post.path}${item.slug}`}
                    className="news-item"
                  >
                    <div className="news-imgbox">
                      <img
                        src={
                          item.image
                            ? getImageUrl(item.image)
                            : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
                        }
                        alt={item.title}
                      />
                    </div>

                    <div className="news-txtbox">
                      <h5>{item.title}</h5>
                    </div>
                  </Link>
                );
              });
            })}
            {/* <Link to className="news-item">
              <div className="news-imgbox">
                <img
                  src="https://duhocinec.com/wp-content/uploads/2025/03/new-zealand-chon-truong-20250228.jpg"
                  alt=""
                />
              </div>

              <div className="news-txtbox">
                <h5>
                  Check profile 8 trường đại học công lập New Zealand: Đâu là
                  “chân ái” của bạn?
                </h5>
              </div>
            </Link>

            <Link to className="news-item">
              <div className="news-imgbox">
                <img
                  src="https://duhocinec.com/wp-content/uploads/2025/03/new-zealand-chon-truong-20250228.jpg"
                  alt=""
                />
              </div>

              <div className="news-txtbox">
                <h5>
                  Check profile 8 trường đại học công lập New Zealand: Đâu là
                  “chân ái” của bạn?
                </h5>
              </div>
            </Link>

            <Link to className="news-item">
              <div className="news-imgbox">
                <img
                  src="https://duhocinec.com/wp-content/uploads/2025/03/new-zealand-chon-truong-20250228.jpg"
                  alt=""
                />
              </div>

              <div className="news-txtbox">
                <h5>
                  Check profile 8 trường đại học công lập New Zealand: Đâu là
                  “chân ái” của bạn?
                </h5>
              </div>
            </Link>

            <Link to className="news-item">
              <div className="news-imgbox">
                <img
                  src="https://duhocinec.com/wp-content/uploads/2025/03/new-zealand-chon-truong-20250228.jpg"
                  alt=""
                />
              </div>

              <div className="news-txtbox">
                <h5>
                  Check profile 8 trường đại học công lập New Zealand: Đâu là
                  “chân ái” của bạn?
                </h5>
              </div>
            </Link>

            <Link to className="news-item">
              <div className="news-imgbox">
                <img
                  src="https://duhocinec.com/wp-content/uploads/2025/03/new-zealand-chon-truong-20250228.jpg"
                  alt=""
                />
              </div>

              <div className="news-txtbox">
                <h5>
                  Check profile 8 trường đại học công lập New Zealand: Đâu là
                  “chân ái” của bạn?
                </h5>
              </div>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
