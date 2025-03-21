import React from "react";
import "../styles.scss";
import BreadcrumbCustom from "../../components/Breadcrumb";
import { Link } from "react-router-dom";
import getImageUrl from "../../utils/getImage";
const Category = ({ data }) => {
  const { postsCategory, coursesCate, countriesCate } = data;
  console.log(coursesCate);
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
                className="category-item"
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
            return (
              <Link
                key={index}
                to={`${category.slug}`}
                className="category-item"
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
            return (
              <Link
                key={index}
                to={`${data.path}${category.slug}`}
                className="category-item"
              >
                <img
                  src={
                    category.thumbnail
                      ? getImageUrl(category.thumbnail)
                      : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
                  }
                  alt={category.title}
                />
                <h1>
                  {Number(category.price).toLocaleString("vi", {
                    style: "currency",
                    currency: "VND",
                  })}
                </h1>
                <h2>{category.title}</h2>
                <p>{category.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Category;
