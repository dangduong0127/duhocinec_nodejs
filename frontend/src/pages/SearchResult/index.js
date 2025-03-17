import React, { useEffect } from "react";
import "./styles.scss";
import ErrorPage from "../404page";
import { Link, useLocation } from "react-router-dom";
import { notification } from "antd";
const SearchResults = (props) => {
  const location = useLocation();
  const data = location.state;

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
        {data.posts.map((item) => {
          return (
            <Link className="nav-item" to={item.slug}>
              {item.title}
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
