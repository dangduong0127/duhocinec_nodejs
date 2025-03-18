import React from "react";
import "./styles.scss";
import { searchPosts } from "../../utils/api";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
const SearchPosts = () => {
  const navigate = useNavigate();
  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const key = e.target.searchInput.value;
      const response = await searchPosts(key);
      navigate("/search-results", { state: response.data });
    } catch (err) {
      notification.error({
        message: "Error",
        description: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      id="search-post"
      className="homeSearchWrapper"
    >
      <input type="text" name="searchInput" placeholder="Search..." />
      <button className="btn-search">Tìm kiếm</button>
    </form>
  );
};

export default SearchPosts;
