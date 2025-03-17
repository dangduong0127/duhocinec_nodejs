import React, { useState } from "react";
import "./styles.scss";
// import { Link } from "react-router-dom";
import BreadcrumbCustom from "../../components/Breadcrumb";

const Posts = ({ category, postDetails }) => {
  const [loading, setLoading] = useState(true);

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return postDetails ? (
    <main className="site-main">
      <div className="container">
        {/* Breadcrumb */}
        <BreadcrumbCustom breadcrumb={category} titlePost={postDetails.title} />

        {/* Main layout */}
        <div className="main-layout">
          {/* Article content */}
          <div className="article-container">
            <article className="article">
              <header className="article-header">
                <h1>{postDetails.title}</h1>
                <div className="meta-info">
                  <span>Đăng ngày: {postDetails.createdAt}</span> |{" "}
                  <span>
                    Tác giả:
                    {/* {postDetails.author_inf.firstName} */}
                  </span>
                </div>
              </header>

              <div className="featured-image">
                <img src="/placeholder-image.jpg" alt="Pathway là gì?" />
              </div>

              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: postDetails.content }}
              ></div>

              <div className="share-buttons">
                <span>Chia sẻ:</span>
                <button>F</button>
                <button>T</button>
                <button>E</button>
              </div>

              <div className="tags">
                <span>Tags:</span>
                <span>Pathway</span>
                <span>Du học</span>
                <span>Chương trình dự bị</span>
              </div>

              <div className="related-posts">
                <h3>Bài viết liên quan</h3>
                <div className="related-posts-grid">
                  <div className="related-post">
                    <img
                      src="/placeholder-related-1.jpg"
                      alt="Bài viết liên quan"
                    />
                    <h4>
                      Top 10 trường đại học có chương trình Pathway tốt nhất tại
                      Mỹ
                    </h4>
                  </div>
                  <div className="related-post">
                    <img
                      src="/placeholder-related-2.jpg"
                      alt="Bài viết liên quan"
                    />
                    <h4>Chi phí du học chương trình Pathway tại Úc năm 2023</h4>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="sidebar-container">
            <div className="sidebar">
              {/* Search widget */}
              <div className="widget search-widget">
                <h3>Tìm kiếm</h3>
                <div className="search-form">
                  <input type="text" placeholder="Tìm kiếm..." />
                  <button>🔍</button>
                </div>
              </div>

              {/* Contact form widget */}
              <div className="widget contact-widget">
                <h3>Đăng ký tư vấn</h3>
                <form>
                  <input type="text" placeholder="Họ và tên" />
                  <input type="tel" placeholder="Số điện thoại" />
                  <input type="email" placeholder="Email" />
                  <select>
                    <option value="">Quốc gia muốn du học</option>
                    <option value="usa">Mỹ</option>
                    <option value="uk">Anh</option>
                    <option value="australia">Úc</option>
                    <option value="canada">Canada</option>
                  </select>
                  <button>Gửi thông tin</button>
                </form>
              </div>

              {/* Popular posts widget */}
              <div className="widget popular-posts-widget">
                <h3>Bài viết phổ biến</h3>
                <div className="popular-post">
                  <img src="/placeholder-thumb-1.jpg" alt="Post thumbnail" />
                  <div className="post-info">
                    <h4>Kinh nghiệm xin visa du học Mỹ thành công</h4>
                    <p>15/02/2023</p>
                  </div>
                </div>
                <div className="popular-post">
                  <img src="/placeholder-thumb-2.jpg" alt="Post thumbnail" />
                  <div className="post-info">
                    <h4>Top 5 ngành học hot nhất tại Úc năm 2023</h4>
                    <p>10/02/2023</p>
                  </div>
                </div>
                <div className="popular-post">
                  <img src="/placeholder-thumb-3.jpg" alt="Post thumbnail" />
                  <div className="post-info">
                    <h4>Chi phí du học Canada cập nhật mới nhất</h4>
                    <p>05/02/2023</p>
                  </div>
                </div>
              </div>

              {/* Categories widget */}
              <div className="widget categories-widget">
                <h3>Danh mục</h3>
                <ul>
                  <li>
                    <a href="#">Du học Mỹ</a>
                  </li>
                  <li>
                    <a href="#">Du học Anh</a>
                  </li>
                  <li>
                    <a href="#">Du học Úc</a>
                  </li>
                  <li>
                    <a href="#">Du học Canada</a>
                  </li>
                  <li>
                    <a href="#">Học bổng du học</a>
                  </li>
                  <li>
                    <a href="#">Kinh nghiệm du học</a>
                  </li>
                </ul>
              </div>

              {/* Banner widget */}
              <div className="widget banner-widget">
                <img src="/placeholder-banner.jpg" alt="Banner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  ) : (
    "null"
  );
};

export default Posts;
