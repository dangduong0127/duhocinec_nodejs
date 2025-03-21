import React, { useEffect } from "react";
import "./styles.scss";
import ErrorPage from "../404page";
import { Link, useLocation } from "react-router-dom";
import { notification } from "antd";
import getImageUrl from "../../utils/getImage";
const SearchResults = () => {
  const location = useLocation();
  const data = location.state;
  console.log("location", location.keyword);
  useEffect(() => {
    if (!data?.success) {
      notification.error({
        message: "Không tìm thấy kết quả nào phù hợp với từ khóa bạn đã nhập",
        duration: 5,
      });
    }
  }, [data]);

  return data?.success ? (
    <div className="search-results-wrapper">
      <div className="container">
        <h1>
          {data.posts.length + data.countries.length + data.courses.length} Kết
          quả tìm kiếm cho từ khoá:{" "}
          <span style={{ color: "red" }}>"{data.keywords}"</span>
        </h1>
        {data.posts.map((item) => {
          return (
            <Link
              key={item.id}
              className="nav-item"
              to={`${item.postsCategory.path}${item.slug}`}
            >
              <img
                className="post-thumbnail"
                src={
                  item.image
                    ? getImageUrl(item.image)
                    : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
                }
                alt={item.title}
              />
              <h3 className="title">{item.title}</h3>
              <p className="excerpt">{item.excerpt}</p>
            </Link>
          );
        })}
        {data.countries.map((item) => {
          return (
            <Link
              key={item.id}
              className="nav-item"
              to={`/quoc-gia${item.slug}`}
              state={item.id}
            >
              <img
                className="post-thumbnail"
                src={
                  item.thumbnail
                    ? getImageUrl(item.thumbnail)
                    : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
                }
                alt={item.title}
              />
              <div className="post-content">
                <h3 className="title">{item.title}</h3>
                <p className="excerpt">{item.excerpt}</p>
              </div>
            </Link>
          );
        })}

        {data.courses.map((item) => {
          return (
            <Link
              key={item.id}
              className="nav-item"
              to={`/quoc-gia${item.slug}`}
              state={item.id}
            >
              <img
                className="post-thumbnail"
                src={
                  item.thumbnail
                    ? getImageUrl(item.thumbnail)
                    : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
                }
                alt={item.title}
              />
              <div className="post-content">
                <h3 className="title">{item.title}</h3>
                <p className="excerpt">{item.excerpt}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  ) : (
    <ErrorPage />
  );
};

export default SearchResults;
