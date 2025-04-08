import React, { useState, useEffect } from "react";
import "./styles.scss";
import BreadcrumbCustom from "../../components/Breadcrumb";
import { Link } from "react-router-dom";
import getImageUrl from "../../utils/getImage";
import { Button } from "antd";
import Icon from "@ant-design/icons";
import { useCart } from "../../hooks/Context/cart.context";
const Category = ({ data }) => {
  const { postsCategory, coursesCate, countriesCate } = data;
  const { cart, setCart } = useCart();

  const handleBtnBuy = (e) => {
    const product = cart.find((item) => item.id === e);
    if (!product) {
      setCart((prev) => {
        const newCart = [
          ...prev,
          {
            id: e,
          },
        ];
        localStorage.setItem("shoppingCart", JSON.stringify(newCart));
        return newCart;
      });
    }
  };
  return (
    <section className="category-wrapper">
      <div className="container">
        <BreadcrumbCustom breadcrumb={data} />
        <div className="category-container">
          {postsCategory?.map((category, index) => {
            return (
              <Link
                key={index}
                to={`${data.path}${category.slug}`}
                className="category"
              >
                <img
                  src={
                    category.image
                      ? getImageUrl(category.image)
                      : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
                  }
                  alt={category.title}
                />
                <h2>{category.title}</h2>
                <p>{category.description}</p>
              </Link>
            );
          })}
          {countriesCate?.map((category, index) => {
            const slug = `/quoc-gia${category.slug}`;
            return (
              <Link
                key={index}
                to={slug}
                className="category"
                state={category.id}
              >
                <img
                  src={
                    category.thumbnail
                      ? getImageUrl(category.thumbnail)
                      : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
                  }
                  alt={category.title}
                />

                <h2>{category.title}</h2>
                <p>{category.description}</p>
              </Link>
            );
          })}
          {coursesCate?.map((category, index) => {
            const isInCart = cart.some((item) => item.id === category.id);
            return (
              <div key={index} className="category-item">
                <Link to={`${data.path}${category.slug}`}>
                  <img
                    src={
                      category.thumbnail
                        ? getImageUrl(category.thumbnail)
                        : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
                    }
                    alt={category.title}
                  />
                  <h1 className="price">
                    {Number(category.price).toLocaleString("vi", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </h1>
                  <h2 className="title">{category.title}</h2>
                </Link>
                {isInCart ? (
                  <Link to="/cart">
                    <Button
                      className="redirec-to-card"
                      color="purple"
                      variant="solid"
                    >
                      Chuyển đến giỏ hàng
                    </Button>
                  </Link>
                ) : (
                  <Button
                    className="btn-buy"
                    type="primary"
                    onClick={() => handleBtnBuy(category.id)}
                  >
                    Thêm vào giỏ hàng
                    <Icon type="shopping-cart" />
                  </Button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Category;
